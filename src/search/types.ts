/**
 * Tag name for the searchable dropdown list component
 */
export const SEARCHABLE_LIST_TAG = 'cosmoz-dropdown-list-searchable';

/**
 * Slot name for the dropdown button element
 */
export const BUTTON_SLOT = 'button';

/**
 * Represents the current focus position in the dropdown navigation.
 */
export interface Position {
	/** Index of the focused item in the visible items array (-1 when search is focused) */
	index: number;
	/** Whether the search input or a dropdown item has focus */
	focused: 'search' | 'item';
}

/**
 * Context object passed to keyboard event handlers.
 * Contains all state and callbacks needed for navigation logic.
 */
export interface KeyboardContext {
	/** The host element containing the dropdown */
	host: HTMLElement;
	/** Current navigation position */
	position: Position;
	/** Array of currently visible dropdown items */
	visibleItems: HTMLElement[];
	/** Callback to update search term */
	onSearchChange: (term: string) => void;
	/** Callback to focus the search input */
	focusSearchInput: () => void;
	/** Callback to focus a specific item by index */
	focusItem: (index: number) => void;
}
