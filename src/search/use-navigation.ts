import { useCallback, useEffect, useState, useMemo } from '@pionjs/pion';

export interface UseSearchNavigationOptions {
	host: HTMLElement;
	onSearchChange: (term: string) => void;
}

interface Position {
	index: number;
	focused: 'search' | 'item';
}

// Helper hook for managing DOM elements and visibility
const useDropdownElements = (host: HTMLElement, slotVersion: number) => {
	const getSlottedElements = useCallback(() => {
		// The buttons are light DOM children of the menu host, not slotted in shadow DOM
		const children = Array.from(host.children).filter(
			child => child.slot !== 'button' // Skip the dropdown button itself
		) as HTMLElement[];
		return children;
	}, [host]);

	// Memoize visible items to prevent excessive DOM queries
	const visibleItems = useMemo(() => {
		const elements = getSlottedElements();
		const visible = elements.filter(el => el.style.display !== 'none');
		return visible;
	}, [getSlottedElements, slotVersion]);

	const getSearchInput = useCallback(() => {
		// The search input is in the SearchableList component's shadow root
		// SearchableMenu renders cosmoz-dropdown-list-searchable in its shadow DOM
		// as a light DOM child of cosmoz-dropdown
		const listElement = host.shadowRoot?.querySelector(
			'cosmoz-dropdown-list-searchable',
		);
		const input = listElement?.shadowRoot?.querySelector('.search-input') as HTMLInputElement;
		return input || null;
	}, [host]);

	return { visibleItems, getSearchInput, getSlottedElements };
};

// Helper hook for focus management
const useFocusManagement = (visibleItems: HTMLElement[], getSearchInput: () => HTMLInputElement | null, setPosition: (pos: Position) => void) => {
	const focusSearchInput = useCallback(() => {
		const searchInput = getSearchInput();
		if (searchInput) {
			searchInput.focus();
			setPosition({ index: -1, focused: 'search' });
		}
	}, [getSearchInput, setPosition]);

	const focusItem = useCallback((index: number) => {
		if (index >= 0 && index < visibleItems.length) {
			const item = visibleItems[index];
			if (!item.hasAttribute('tabindex')) {
				item.setAttribute('tabindex', '0');
			}
			item.focus();
			setPosition({ index, focused: 'item' });
		}
	}, [visibleItems, setPosition]);

	return { focusSearchInput, focusItem };
};

// Helper hook for keyboard event handlers  
const useKeyboardHandlers = ({
	position,
	visibleItems,
	focusItem,
	focusSearchInput,
	onSearchChange,
	getSearchInput
}: {
	position: Position;
	visibleItems: HTMLElement[];
	focusItem: (index: number) => void;
	focusSearchInput: () => void;
	onSearchChange: (term: string) => void;
	getSearchInput: () => HTMLInputElement | null;
}) => {
	const triggerSingleVisibleItem = useCallback((e: KeyboardEvent) => {
		if (visibleItems.length === 1) {
			e.preventDefault();
			visibleItems[0].click();
		}
	}, [visibleItems]);

	const handleArrowUp = useCallback((currentIndex: number) => {
		if (position.focused === 'search') {
			if (visibleItems.length > 0) {
				focusItem(visibleItems.length - 1);
			}
		} else if (currentIndex > 0) {
			focusItem(currentIndex - 1);
		} else {
			focusSearchInput();
		}
	}, [position.focused, focusItem, focusSearchInput, visibleItems]);

	const handleArrowDown = useCallback((currentIndex: number) => {
		if (position.focused === 'search') {
			if (visibleItems.length > 0) {
				focusItem(0);
			}
		} else if (currentIndex < visibleItems.length - 1) {
			focusItem(currentIndex + 1);
		}
	}, [position.focused, focusItem, visibleItems]);

	const handleEnter = useCallback((currentIndex: number, e: KeyboardEvent) => {
		if (position.focused === 'item' && currentIndex >= 0 && currentIndex < visibleItems.length) {
			visibleItems[currentIndex].click();
		} else if (position.focused === 'search') {
			triggerSingleVisibleItem(e);
		}
	}, [position.focused, triggerSingleVisibleItem, visibleItems]);

	const handleEscape = useCallback(() => {
		onSearchChange('');
		const searchInput = getSearchInput();
		if (searchInput) {
			searchInput.value = '';
		}
		focusSearchInput();
	}, [onSearchChange, getSearchInput, focusSearchInput]);

	return { handleArrowUp, handleArrowDown, handleEnter, handleEscape };
};

// Helper hook for the main keyboard event handler
const useMainKeyboardHandler = ({
	host,
	position,
	getSearchInput,
	handleArrowUp,
	handleArrowDown,
	handleEnter,
	handleEscape
}: {
	host: HTMLElement;
	position: Position;
	getSearchInput: () => HTMLInputElement | null;
	handleArrowUp: (currentIndex: number) => void;
	handleArrowDown: (currentIndex: number) => void;
	handleEnter: (currentIndex: number, e: KeyboardEvent) => void;
	handleEscape: () => void;
}) => {
	return useCallback((e: KeyboardEvent) => {
		if (e.defaultPrevented || (e.ctrlKey && e.altKey)) {
			return;
		}

		// Only handle keys if we have a search input (dropdown is open)
		const searchInput = getSearchInput();
		if (!searchInput) {
			return;
		}

		// Only handle keyboard events when the dropdown or its children have focus
		const activeElement = document.activeElement;
		const isWithinDropdown = host.contains(activeElement) || 
			searchInput === activeElement ||
			host.shadowRoot?.contains(activeElement);
		
		if (!isWithinDropdown) {
			return;
		}

		const currentIndex = position.focused === 'item' ? position.index : -1;

		switch (e.key) {
			case 'ArrowUp':
			case 'Up':
				e.preventDefault();
				handleArrowUp(currentIndex);
				break;
			case 'ArrowDown':
			case 'Down':
				e.preventDefault();
				handleArrowDown(currentIndex);
				break;
			case 'Enter':
				e.preventDefault();
				handleEnter(currentIndex, e);
				break;
			case 'Escape':
				e.preventDefault();
				handleEscape();
				break;
		}
	}, [host, getSearchInput, position, handleArrowUp, handleArrowDown, handleEnter, handleEscape]);
};

// Helper hook for setting up event listeners and DOM management
const useEventListeners = (
	host: HTMLElement,
	handleKeyboard: (e: KeyboardEvent) => void,
	getSlottedElements: () => HTMLElement[],
	setSlotVersion: (fn: (v: number) => number) => void
) => {
	useEffect(() => {
		const makeElementsFocusable = () => {
			const elements = getSlottedElements();
			elements.forEach((element, idx) => {
				if (!element.hasAttribute('tabindex')) {
					element.setAttribute('tabindex', '0');
				}
				element.setAttribute('role', 'option');
				element.setAttribute('id', `dropdown-item-${idx}`);
			});
		};

		const handleChildListMutation = () => {
			setSlotVersion(v => v + 1);
			makeElementsFocusable();
		};

		// Add keyboard listener scoped to the host element instead of document
		// This prevents multiple global listeners and improves performance
		host.addEventListener('keydown', handleKeyboard, true);

		// Initial setup
		makeElementsFocusable();

		// Watch for child changes using MutationObserver
		const observer = new MutationObserver(handleChildListMutation);
		observer.observe(host, { childList: true });

		return () => {
			host.removeEventListener('keydown', handleKeyboard, true);
			observer.disconnect();
		};
	}, [host, handleKeyboard, getSlottedElements, setSlotVersion]);
};

export const useSearchNavigation = ({ host, onSearchChange }: UseSearchNavigationOptions) => {
	const [position, setPosition] = useState<Position>({ index: -1, focused: 'search' });
	const [slotVersion, setSlotVersion] = useState(0);

	// Use helper hooks to break down complexity
	const { visibleItems, getSearchInput, getSlottedElements } = useDropdownElements(host, slotVersion);
	const { focusSearchInput, focusItem } = useFocusManagement(visibleItems, getSearchInput, setPosition);
	const { handleArrowUp, handleArrowDown, handleEnter, handleEscape } = useKeyboardHandlers({
		position,
		visibleItems,
		focusItem,
		focusSearchInput,
		onSearchChange,
		getSearchInput
	});

	// Main keyboard handler
	const handleKeyboard = useMainKeyboardHandler({
		host,
		position,
		getSearchInput,
		handleArrowUp,
		handleArrowDown,
		handleEnter,
		handleEscape
	});

	// Set up event listeners and DOM management
	useEventListeners(host, handleKeyboard, getSlottedElements, setSlotVersion);

	// Reset position when visible items change to prevent out-of-bounds index
	useEffect(() => {
		if (position.focused === 'item' && position.index >= visibleItems.length && visibleItems.length > 0) {
			setPosition({ index: Math.max(0, visibleItems.length - 1), focused: 'item' });
		}
	}, [visibleItems.length, position]);

	return {
		position,
		focusItem,
		focusSearchInput
	};
};