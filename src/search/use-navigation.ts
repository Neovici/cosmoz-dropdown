import { useCallback, useEffect, useState, useMemo } from '@pionjs/pion';

export interface UseSearchNavigationOptions {
	host: HTMLElement;
	onSearchChange: (term: string) => void;
}

interface Position {
	index: number;
	focused: 'search' | 'item';
}

// eslint-disable-next-line max-statements
export const useSearchNavigation = ({ host, onSearchChange }: UseSearchNavigationOptions) => {
	const [position, setPosition] = useState<Position>({ index: -1, focused: 'search' });
	const [slotVersion, setSlotVersion] = useState(0);

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

	const focusSearchInput = useCallback(() => {
		const searchInput = getSearchInput();
		if (searchInput) {
			searchInput.focus();
			setPosition({ index: -1, focused: 'search' });
		}
	}, [getSearchInput]);

	const focusItem = useCallback((index: number) => {
		if (index >= 0 && index < visibleItems.length) {
			const item = visibleItems[index];
			if (!item.hasAttribute('tabindex')) {
				item.setAttribute('tabindex', '0');
			}
			item.focus();
			setPosition({ index, focused: 'item' });
		}
	}, [visibleItems]);

	const triggerSingleVisibleItem = useCallback((e: KeyboardEvent) => {
		if (visibleItems.length === 1) {
			e.preventDefault();
			visibleItems[0].click();
		}
	}, [visibleItems]);

	// Handle arrow up navigation
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

	// Handle arrow down navigation
	const handleArrowDown = useCallback((currentIndex: number) => {
		if (position.focused === 'search') {
			if (visibleItems.length > 0) {
				focusItem(0);
			}
		} else if (currentIndex < visibleItems.length - 1) {
			focusItem(currentIndex + 1);
		}
	}, [position.focused, focusItem, visibleItems]);

	// Handle enter key
	const handleEnter = useCallback((currentIndex: number, e: KeyboardEvent) => {
		if (position.focused === 'item' && currentIndex >= 0 && currentIndex < visibleItems.length) {
			visibleItems[currentIndex].click();
		} else if (position.focused === 'search') {
			triggerSingleVisibleItem(e);
		}
	}, [position.focused, triggerSingleVisibleItem, visibleItems]);

	// Handle escape key
	const handleEscape = useCallback(() => {
		onSearchChange('');
		const searchInput = getSearchInput();
		if (searchInput) {
			searchInput.value = '';
		}
		focusSearchInput();
	}, [onSearchChange, getSearchInput, focusSearchInput]);

	// Main keyboard handler - simplified like cosmoz-autocomplete
	const handleKeyboard = useCallback((e: KeyboardEvent) => {
		if (e.defaultPrevented || (e.ctrlKey && e.altKey)) {
			return;
		}

		// Only handle keys if we have a search input (dropdown is open)
		const searchInput = getSearchInput();
		if (!searchInput) {
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
	}, [getSearchInput, position, handleArrowUp, handleArrowDown, handleEnter, handleEscape]);

	// Set up keyboard listener and ensure items are focusable
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

		// Add global keyboard listener with capture to match cosmoz-autocomplete pattern
		document.addEventListener('keydown', handleKeyboard, true);

		// Initial setup
		makeElementsFocusable();

		// Watch for child changes using MutationObserver
		const observer = new MutationObserver(handleChildListMutation);
		observer.observe(host, { childList: true });

		return () => {
			document.removeEventListener('keydown', handleKeyboard, true);
			observer.disconnect();
		};
	}, [host, handleKeyboard, getSlottedElements]);

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