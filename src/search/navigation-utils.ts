/**
 * Pure utility functions for keyboard navigation in searchable dropdown.
 * These are extracted from use-navigation.ts to improve testability and maintainability.
 */

import type { Position, KeyboardContext } from './types';

export type { Position, KeyboardContext };

/**
 * Gets the search input element from the dropdown's shadow DOM
 * @param {HTMLElement} host - The host element containing the dropdown
 * @returns {HTMLInputElement | null} The search input element or null if not found
 */
export const getSearchInput = (host: HTMLElement): HTMLInputElement | null => {
	const listElement = host.shadowRoot?.querySelector('cosmoz-dropdown-list-searchable');
	const input = listElement?.shadowRoot?.querySelector('.search-input') as HTMLInputElement;
	return input || null;
};

/**
 * Gets all visible items (filters out hidden elements and the button slot)
 * @param {HTMLElement} host - The host element containing the dropdown items
 * @returns {HTMLElement[]} Array of visible HTMLElements
 */
export const getVisibleItems = (host: HTMLElement): HTMLElement[] => {
	const children = Array.from(host.children).filter(
		child => child.slot !== 'button' // Skip the dropdown button itself
	) as HTMLElement[];
	return children.filter(el => el.style.display !== 'none');
};

/**
 * Makes all dropdown items focusable and adds proper ARIA attributes
 * @param {HTMLElement} host - The host element containing the dropdown items
 */
export const makeElementsFocusable = (host: HTMLElement): void => {
	const children = Array.from(host.children).filter(
		child => child.slot !== 'button'
	) as HTMLElement[];
	
	children.forEach((element, idx) => {
		if (!element.hasAttribute('tabindex')) {
			element.setAttribute('tabindex', '0');
		}
		element.setAttribute('role', 'option');
		element.setAttribute('id', `dropdown-item-${idx}`);
	});
};

/**
 * Handles ArrowUp key - moves focus up in the list or to the search input
 * @param {number} currentIndex - Current focused item index
 * @param {KeyboardContext} ctx - Keyboard navigation context
 */
const handleArrowUp = (currentIndex: number, ctx: KeyboardContext): void => {
	if (ctx.position.focused === 'search') {
		// From search input, go to last item
		if (ctx.visibleItems.length > 0) {
			ctx.focusItem(ctx.visibleItems.length - 1);
		}
	} else if (currentIndex > 0) {
		// Move up in the list
		ctx.focusItem(currentIndex - 1);
	} else {
		// At top of list, go back to search input
		ctx.focusSearchInput();
	}
};

/**
 * Handles ArrowDown key - moves focus down in the list
 * @param {number} currentIndex - Current focused item index
 * @param {KeyboardContext} ctx - Keyboard navigation context
 */
const handleArrowDown = (currentIndex: number, ctx: KeyboardContext): void => {
	if (ctx.position.focused === 'search') {
		// From search input, go to first item
		if (ctx.visibleItems.length > 0) {
			ctx.focusItem(0);
		}
	} else if (currentIndex < ctx.visibleItems.length - 1) {
		// Move down in the list
		ctx.focusItem(currentIndex + 1);
	}
};

/**
 * Handles Enter key - clicks the focused item or the single visible item
 * @param {number} currentIndex - Current focused item index
 * @param {KeyboardContext} ctx - Keyboard navigation context
 * @param {KeyboardEvent} e - The keyboard event
 */
const handleEnter = (currentIndex: number, ctx: KeyboardContext, e: KeyboardEvent): void => {
	if (ctx.position.focused === 'item' && currentIndex >= 0 && currentIndex < ctx.visibleItems.length) {
		// Click the focused item
		ctx.visibleItems[currentIndex].click();
	} else if (ctx.position.focused === 'search' && ctx.visibleItems.length === 1) {
		// If only one item is visible and we're in search, trigger it
		e.preventDefault();
		ctx.visibleItems[0].click();
	}
};

/**
 * Handles Escape key - clears the search and focuses the search input
 * @param {KeyboardContext} ctx - Keyboard navigation context
 */
const handleEscape = (ctx: KeyboardContext): void => {
	ctx.onSearchChange('');
	const searchInput = getSearchInput(ctx.host);
	if (searchInput) {
		searchInput.value = '';
	}
	ctx.focusSearchInput();
};

/**
 * Main keyboard event handler - delegates to specific key handlers
 * @param {KeyboardEvent} e - The keyboard event
 * @param {KeyboardContext} ctx - Keyboard navigation context
 */
export const handleKeyboardEvent = (
	e: KeyboardEvent,
	ctx: KeyboardContext
): void => {
	if (e.defaultPrevented || (e.ctrlKey && e.altKey)) {
		return;
	}

	// Only handle keys if we have a search input (dropdown is open)
	const searchInput = getSearchInput(ctx.host);
	if (!searchInput) {
		return;
	}

	// Only handle keyboard events when the dropdown or its children have focus
	const activeElement = document.activeElement;
	const isWithinDropdown = 
		ctx.host.contains(activeElement) || 
		searchInput === activeElement ||
		ctx.host.shadowRoot?.contains(activeElement);
	
	if (!isWithinDropdown) {
		return;
	}

	const currentIndex = ctx.position.focused === 'item' ? ctx.position.index : -1;

	switch (e.key) {
		case 'ArrowUp':
		case 'Up':
			e.preventDefault();
			handleArrowUp(currentIndex, ctx);
			break;
		case 'ArrowDown':
		case 'Down':
			e.preventDefault();
			handleArrowDown(currentIndex, ctx);
			break;
		case 'Enter':
			e.preventDefault();
			handleEnter(currentIndex, ctx, e);
			break;
		case 'Escape':
			e.preventDefault();
			handleEscape(ctx);
			break;
	}
};
