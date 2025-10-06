import { useCallback, useEffect, useState, useMemo } from '@pionjs/pion';
import {
	getSearchInput,
	getVisibleItems,
	makeElementsFocusable,
	handleKeyboardEvent,
} from './navigation-utils';
import type { Position, KeyboardContext } from './types';

export interface UseSearchNavigationOptions {
	host: HTMLElement;
	onSearchChange: (term: string) => void;
}

export type { Position };

/**
 * Hook for managing keyboard navigation in searchable dropdown.
 * Handles arrow key navigation, enter to select, and escape to clear search.
 * @returns {object} Navigation state and focus control functions
 */
export const useSearchNavigation = ({ host, onSearchChange }: UseSearchNavigationOptions) => {
	const [position, setPosition] = useState<Position>({ index: -1, focused: 'search' });
	const [slotVersion, setSlotVersion] = useState(0);

	// Get visible items - memoized to prevent excessive DOM queries
	const visibleItems = useMemo(() => getVisibleItems(host), [host, slotVersion]);

	// Focus management functions
	const focusSearchInput = useCallback(() => {
		const searchInput = getSearchInput(host);
		if (searchInput) {
			searchInput.focus();
			setPosition({ index: -1, focused: 'search' });
		}
	}, [host]);

	const focusItem = useCallback(
		(index: number) => {
			if (index >= 0 && index < visibleItems.length) {
				const item = visibleItems[index];
				if (!item.hasAttribute('tabindex')) {
					item.setAttribute('tabindex', '0');
				}
				item.focus();
				setPosition({ index, focused: 'item' });
			}
		},
		[visibleItems],
	);

	// Main keyboard handler - delegates to utility function
	const handleKeyboard = useCallback(
		(e: KeyboardEvent) => {
			const ctx: KeyboardContext = {
				host,
				position,
				visibleItems,
				onSearchChange,
				focusSearchInput,
				focusItem,
			};
			handleKeyboardEvent(e, ctx);
		},
		[host, position, visibleItems, onSearchChange, focusSearchInput, focusItem],
	);

	// Setup event listeners and DOM management
	useEffect(() => {
		const handleMutation = () => {
			setSlotVersion((v) => v + 1);
			makeElementsFocusable(host);
		};

		// Add keyboard listener scoped to the host element
		host.addEventListener('keydown', handleKeyboard, true);

		// Initial setup
		makeElementsFocusable(host);

		// Watch for child changes using MutationObserver
		const observer = new MutationObserver(handleMutation);
		observer.observe(host, { childList: true });

		return () => {
			host.removeEventListener('keydown', handleKeyboard, true);
			observer.disconnect();
		};
	}, [host, handleKeyboard]);

	// Reset position when visible items change to prevent out-of-bounds index
	useEffect(() => {
		if (
			position.focused === 'item' &&
			position.index >= visibleItems.length &&
			visibleItems.length > 0
		) {
			setPosition({ index: Math.max(0, visibleItems.length - 1), focused: 'item' });
		}
	}, [visibleItems.length, position]);

	return {
		position,
		focusItem,
		focusSearchInput,
	};
};