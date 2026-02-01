import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import { useCallback } from '@pionjs/pion';
import {
	MENU_NAVIGATE_DOWN,
	MENU_NAVIGATE_END,
	MENU_NAVIGATE_HOME,
	MENU_NAVIGATE_UP,
} from './menu-keybindings';

// Selectors
export const ITEM_SELECTOR = 'cosmoz-button';
export const GROUP_SELECTOR = 'cosmoz-dropdown-menu-group-next';
const VISIBLE_ITEM_SELECTOR = `${ITEM_SELECTOR}:not([hidden]):not([disabled])`;

/**
 * Get the slot element from a group's shadow root
 */
const getGroupSlot = (group: Element): HTMLSlotElement | null =>
	(group as HTMLElement).shadowRoot?.querySelector(
		'slot:not([name])',
	) as HTMLSlotElement | null;

/**
 * Get items from a group element
 */
export const getGroupItems = (group: Element): Element[] => {
	const slot = getGroupSlot(group);
	return slot ? slot.assignedElements({ flatten: true }) : [];
};

/**
 * Get all visible menu items from slotted content.
 * Traverses through groups to find nested items.
 */
export const getVisibleItems = (
	slot: HTMLSlotElement | null,
): HTMLElement[] => {
	if (!slot) return [];

	const items: HTMLElement[] = [];
	const elements = slot.assignedElements({ flatten: true });

	for (const el of elements) {
		if (el.matches('[hidden]')) continue;

		if (el.matches(VISIBLE_ITEM_SELECTOR)) {
			items.push(el as HTMLElement);
		} else if (el.matches(GROUP_SELECTOR)) {
			const groupItems = getGroupItems(el);
			for (const item of groupItems) {
				if (item.matches(VISIBLE_ITEM_SELECTOR)) {
					items.push(item as HTMLElement);
				}
			}
		}
	}

	return items;
};

/**
 * Get the index of the currently focused item
 */
const getActiveIndex = (items: HTMLElement[], host: HTMLElement): number => {
	const root = host.getRootNode() as Document | ShadowRoot;
	const activeElement = root?.activeElement;
	return items.findIndex(
		(item) => item === activeElement || item.contains(activeElement as Node),
	);
};

/**
 * Navigate to next item (with wrap)
 */
export const navigateDown = (items: HTMLElement[], host: HTMLElement): void => {
	if (items.length === 0) return;
	const currentIndex = getActiveIndex(items, host);
	const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
	items[nextIndex]?.focus();
};

/**
 * Navigate to previous item (with wrap)
 */
export const navigateUp = (items: HTMLElement[], host: HTMLElement): void => {
	if (items.length === 0) return;
	const currentIndex = getActiveIndex(items, host);
	const prevIndex =
		currentIndex < 0
			? items.length - 1
			: (currentIndex - 1 + items.length) % items.length;
	items[prevIndex]?.focus();
};

/**
 * Navigate to first item
 */
export const navigateHome = (items: HTMLElement[]): void => {
	items[0]?.focus();
};

/**
 * Navigate to last item
 */
export const navigateEnd = (items: HTMLElement[]): void => {
	items[items.length - 1]?.focus();
};

/**
 * Hook for menu keyboard navigation.
 * Registers activity handlers for arrow key navigation.
 */
export const useMenuNavigation = (
	slotRef: { current: HTMLSlotElement | undefined },
	host: HTMLElement,
) => {
	const down = useCallback(
		() => navigateDown(getVisibleItems(slotRef.current ?? null), host),
		[slotRef, host],
	);

	const up = useCallback(
		() => navigateUp(getVisibleItems(slotRef.current ?? null), host),
		[slotRef, host],
	);

	const home = useCallback(
		() => navigateHome(getVisibleItems(slotRef.current ?? null)),
		[slotRef],
	);

	const end = useCallback(
		() => navigateEnd(getVisibleItems(slotRef.current ?? null)),
		[slotRef],
	);

	useActivity(
		{ activity: MENU_NAVIGATE_DOWN, callback: down, element: () => host },
		[down, host],
	);

	useActivity(
		{ activity: MENU_NAVIGATE_UP, callback: up, element: () => host },
		[up, host],
	);

	useActivity(
		{ activity: MENU_NAVIGATE_HOME, callback: home, element: () => host },
		[home, host],
	);

	useActivity(
		{ activity: MENU_NAVIGATE_END, callback: end, element: () => host },
		[end, host],
	);
};
