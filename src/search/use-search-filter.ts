import { useEffect } from '@pionjs/pion';

export interface UseSearchFilterOptions {
	host: HTMLElement;
	searchTerm: string;
}

export const useSearchFilter = ({ host, searchTerm }: UseSearchFilterOptions) => {
	useEffect(() => {
		const filterElements = () => {
			const children = Array.from(host.children);
			
			children.forEach((child) => {
				if (child.slot === 'button') return; // Skip the button slot
				
				const text = child.textContent?.toLowerCase() || '';
				const matches = searchTerm === '' || text.includes(searchTerm.toLowerCase());
				
				if (matches) {
					(child as HTMLElement).style.display = '';
				} else {
					(child as HTMLElement).style.display = 'none';
				}
			});
		};

		filterElements();
	}, [searchTerm, host]);
};