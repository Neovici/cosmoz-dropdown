import { component, useCallback, useEffect, useState } from '@pionjs/pion';
import { html } from 'lit-html';
import type { Props as DropdownProps } from '../cosmoz-dropdown';
import '../cosmoz-dropdown.js';
import { searchableMenuStyle } from './style';
import { useSearchNavigation } from './use-navigation.js';
import { useSearchFilter } from './use-search-filter';
import { useVisibleItems } from './use-visible-items';
import { SEARCHABLE_LIST_TAG } from './types';

interface SearchableListProps {
	searchTerm: string;
	placeholder?: string;
	onSearchChange: (term: string) => void;
	noResultsText?: string;
	menuHost?: HTMLElement; // The parent menu element that contains the actual button elements
}

export const SearchableList = (host: HTMLElement & SearchableListProps) => {
	const { searchTerm, placeholder = 'Search...', onSearchChange, noResultsText = 'No results found', menuHost } = host;
	
	// Use menuHost (the parent menu) for navigation since that's where the actual button elements are
	const navigationHost = menuHost || host;
	
	const hasVisibleItems = useVisibleItems({ host: navigationHost, searchTerm });
	const { position, focusSearchInput } = useSearchNavigation({ host: navigationHost, onSearchChange });

	const handleSearchInput = useCallback((e: Event) => {
		const target = e.target as HTMLInputElement;
		onSearchChange(target.value);
	}, [onSearchChange]);

	// Auto-focus search input when dropdown opens
	useEffect(() => {
		// Listen for when the dropdown content becomes visible
		const handleOpen = () => {
			// Small delay to ensure the search input is rendered
			requestAnimationFrame(() => {
				focusSearchInput();
			});
		};

		// The dropdown content gets shown when the dropdown opens
		// We can detect this by listening for when the element becomes visible
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.intersectionRatio > 0) {
					handleOpen();
				}
			});
		});

		observer.observe(host);

		return () => observer.disconnect();
	}, [focusSearchInput]);

	return html`
		<div class="dropdown-content">
			<div class="search-container">
				<input
					class="search-input"
					type="text"
					role="combobox"
					aria-autocomplete="list"
					aria-controls="dropdown-listbox"
					aria-expanded="true"
					aria-activedescendant=${position.focused === 'item' ? `dropdown-item-${position.index}` : ''}
					.value=${searchTerm}
					placeholder=${placeholder}
					@input=${handleSearchInput}
				/>
			</div>
			<div class="listbox-wrapper">
				<div role="listbox" id="dropdown-listbox">
					<slot></slot>
				</div>
				${!hasVisibleItems && searchTerm ? html`<div class="no-results" role="status" aria-live="polite">${noResultsText}</div>` : ''}
			</div>
		</div>
	`;
};

customElements.define(
	SEARCHABLE_LIST_TAG,
	component<SearchableListProps>(SearchableList, { styleSheets: [searchableMenuStyle] }),
);

type SearchableMenuProps = Pick<DropdownProps, 'placement'> & {
	searchPlaceholder?: string;
	noResultsText?: string;
};

export const SearchableMenu = (host: HTMLElement & SearchableMenuProps) => {
	const { placement, searchPlaceholder, noResultsText } = host;
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = useCallback((term: string) => {
		setSearchTerm(term);
	}, []);

	// Use the search filter hook to handle filtering
	useSearchFilter({ host, searchTerm });

	return html`
		<cosmoz-dropdown
			.placement=${placement}
			part="dropdown"
			exportparts="anchor, button, content, wrap, dropdown"
		>
			<slot name="button" slot="button"></slot>
			<cosmoz-dropdown-list-searchable
				.searchTerm=${searchTerm}
				.placeholder=${searchPlaceholder}
				.noResultsText=${noResultsText}
				.onSearchChange=${handleSearchChange}
				.menuHost=${host}
			>
				<slot></slot>
			</cosmoz-dropdown-list-searchable>
		</cosmoz-dropdown>
	`;
};

customElements.define('cosmoz-dropdown-menu-searchable', component<SearchableMenuProps>(SearchableMenu));