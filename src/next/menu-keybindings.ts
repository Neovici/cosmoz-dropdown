import type { KeyBinding } from '@neovici/cosmoz-utils/keybindings';

/**
 * Activity symbols for menu keyboard navigation.
 * Use these with `useActivity` in your menu components.
 */
export const MENU_NAVIGATE_UP = Symbol('menu-navigate-up');
export const MENU_NAVIGATE_DOWN = Symbol('menu-navigate-down');
export const MENU_NAVIGATE_HOME = Symbol('menu-navigate-home');
export const MENU_NAVIGATE_END = Symbol('menu-navigate-end');

/**
 * Suggested keybindings for menu navigation.
 * Import and use with `useKeybindings` in your app to enable keyboard navigation.
 *
 * @example
 * ```ts
 * import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
 * import { menuBindings } from '@neovici/cosmoz-dropdown/menu-keybindings';
 *
 * const App = () => {
 *   useKeybindings(menuBindings);
 *   return html`...`;
 * };
 * ```
 */
export const menuBindings: readonly KeyBinding[] = [
	[
		{ key: 'ArrowUp' },
		[MENU_NAVIGATE_UP],
		{ title: 'Up', description: 'Navigate to previous menu item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'ArrowDown' },
		[MENU_NAVIGATE_DOWN],
		{ title: 'Down', description: 'Navigate to next menu item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'Home' },
		[MENU_NAVIGATE_HOME],
		{ title: 'Home', description: 'Navigate to first menu item' },
		{ allowInEditable: true },
	],
	[
		{ key: 'End' },
		[MENU_NAVIGATE_END],
		{ title: 'End', description: 'Navigate to last menu item' },
		{ allowInEditable: true },
	],
];
