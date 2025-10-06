import { useState, useEffect } from '@pionjs/pion';

export interface UseVisibleItemsOptions {
	host: HTMLElement;
	searchTerm: string;
}

export const useVisibleItems = ({ host, searchTerm }: UseVisibleItemsOptions) => {
	const [hasVisibleItems, setHasVisibleItems] = useState(true);

	useEffect(() => {
		const slot = host.shadowRoot?.querySelector('slot') as HTMLSlotElement;
		if (slot) {
			const checkVisibleItems = () => {
				// Use flatten: true to get actual elements through nested slots
				const slottedElements = slot.assignedElements({ flatten: true });
				const visibleCount = slottedElements.filter(el => (el as HTMLElement).style.display !== 'none').length;
				setHasVisibleItems(visibleCount > 0);
			};

			checkVisibleItems();
			slot.addEventListener('slotchange', checkVisibleItems);
			return () => slot.removeEventListener('slotchange', checkVisibleItems);
		}
	}, [searchTerm, host]);

	return hasVisibleItems;
};