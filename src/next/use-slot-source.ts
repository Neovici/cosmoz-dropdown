import { useCallback, useEffect, useState } from '@pionjs/pion';
import type { MenuItem, MenuSource } from './types';

const BUTTON_SELECTOR = 'cosmoz-button';
const GROUP_SELECTOR = 'cosmoz-dropdown-menu-group-next';

const elementToMenuItem = (el: Element, group: string): MenuItem => ({
	label: el.textContent?.trim() || '',
	group,
	disabled: el.hasAttribute('disabled'),
});

const parseSlottedElements = (elements: Element[]): MenuItem[] => {
	const items: MenuItem[] = [];

	for (const el of elements) {
		if (el.matches(GROUP_SELECTOR)) {
			const groupLabel = el.getAttribute('label') || '';
			const groupSlot = el.shadowRoot?.querySelector(
				'slot:not([name])',
			) as HTMLSlotElement | null;
			const groupElements =
				groupSlot?.assignedElements({ flatten: true }) ?? [];

			for (const groupEl of groupElements) {
				if (groupEl.matches(BUTTON_SELECTOR)) {
					items.push(elementToMenuItem(groupEl, groupLabel));
				}
			}
		} else if (el.matches(BUTTON_SELECTOR)) {
			items.push(elementToMenuItem(el, ''));
		}
	}

	return items;
};

/**
 * Converts slotted content to a MenuSource function.
 * The returned function filters items by query.
 */
export const useSlotSource = (slotRef: {
	current: HTMLSlotElement | undefined;
}): MenuSource => {
	const [items, setItems] = useState<MenuItem[]>([]);

	useEffect(() => {
		const slot = slotRef.current;
		if (!slot) return;

		const update = () => {
			const elements = slot.assignedElements({ flatten: true });
			setItems(parseSlottedElements(elements));
		};

		slot.addEventListener('slotchange', update);
		update();

		return () => slot.removeEventListener('slotchange', update);
	}, [slotRef.current]);

	// Return a source function that filters by query
	return useCallback(
		(query: string): MenuItem[] => {
			if (!query.trim()) return items;
			const q = query.toLowerCase().trim();
			return items.filter((item) => item.label.toLowerCase().includes(q));
		},
		[items],
	);
};
