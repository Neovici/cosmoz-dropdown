import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import {
	component,
	css,
	useCallback,
	useEffect,
	useHost,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import type { MenuItem, MenuSource } from './types';
import { useLazyProperty } from './use-lazy-property';
import { useMenuItems } from './use-menu-items';
import { useSlotSource } from './use-slot-source';

const style = css`
	:host {
		display: flex;
		flex-direction: column;
		min-width: 240px;
		max-width: 320px;
		max-height: var(--cosmoz-dropdown-menu-max-height, 400px);
		background: var(--cz-color-bg-primary, #fff);
		border-radius: var(--cz-radius-xl, 0.75rem);
		box-shadow: var(
			--cz-shadow-lg,
			0px 12px 16px -4px rgba(10, 13, 18, 0.08),
			0px 4px 6px -2px rgba(10, 13, 18, 0.03)
		);
		overflow: hidden;
		border: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}

	.search {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
		padding: calc(var(--cz-spacing, 0.25rem) * 3);
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}

	.search-icon {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--cz-color-fg-quaternary, #98a2b3);
	}

	.search-input {
		flex: 1;
		min-width: 0;
		border: none;
		outline: none;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-primary, #101828);
		background: transparent;
	}

	.search-input::placeholder {
		color: var(--cz-color-text-placeholder, #667085);
	}

	.items {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.no-results {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.loading {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
	}

	.group-label {
		padding: calc(var(--cz-spacing, 0.25rem) * 1)
			calc(var(--cz-spacing, 0.25rem) * 3);
		font-size: var(--cz-text-xs, 0.75rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(--cz-color-text-tertiary, #475467);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.group:not(:first-child) {
		border-top: 1px solid var(--cz-color-border-secondary, #eaecf0);
		margin-top: calc(var(--cz-spacing, 0.25rem) * 2);
		padding-top: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	cosmoz-button[data-highlighted] {
		background: var(--cz-color-bg-primary-hover, #f9fafb);
	}
`;

// Search icon SVG
/* eslint-disable max-len */
const searchIcon = html`
	<svg class="search-icon" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
			stroke="currentColor"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;
/* eslint-enable max-len */

interface MenuProps {
	source?: MenuSource;
	searchable?: boolean;
	placeholder?: string;
}

interface RenderItemOptions {
	item: MenuItem;
	index: number;
	highlightedIndex: number;
	highlight: (i: number) => void;
	select: (item: MenuItem) => void;
}

const renderItem = ({
	item,
	index,
	highlightedIndex,
	highlight,
	select,
}: RenderItemOptions) => html`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${item.disabled}
		?data-highlighted=${index === highlightedIndex}
		data-index=${index}
		@mouseenter=${() => highlight(index)}
		@click=${() => !item.disabled && select(item)}
		@mousedown=${(e: Event) => e.preventDefault()}
	>
		${item.icon ?? nothing}
		<cosmoz-menu-label>${item.label}</cosmoz-menu-label>
		${item.suffix ?? nothing}
	</cosmoz-button>
`;

interface RenderGroupedItemsOptions {
	grouped: Map<string, MenuItem[]>;
	items: MenuItem[];
	highlightedIndex: number;
	highlight: (i: number) => void;
	select: (item: MenuItem) => void;
}

const renderGroupedItems = ({
	grouped,
	items,
	highlightedIndex,
	highlight,
	select,
}: RenderGroupedItemsOptions) => {
	// Build a map from item to its global index
	const itemIndexMap = new Map<MenuItem, number>();
	items.forEach((item, i) => itemIndexMap.set(item, i));

	return Array.from(grouped.entries()).map(([groupLabel, groupItems]) => {
		const renderedItems = groupItems.map((item) =>
			renderItem({
				item,
				index: itemIndexMap.get(item) ?? -1,
				highlightedIndex,
				highlight,
				select,
			}),
		);

		if (groupLabel) {
			return html`
				<div class="group">
					<div class="group-label">${groupLabel}</div>
					${renderedItems}
				</div>
			`;
		}
		return renderedItems;
	});
};

const groupItems = (items: MenuItem[]): Map<string, MenuItem[]> => {
	const groups = new Map<string, MenuItem[]>();
	for (const item of items) {
		const key = item.group || '';
		if (!groups.has(key)) groups.set(key, []);
		groups.get(key)!.push(item);
	}
	return groups;
};

const CosmozDropdownMenuNext = ({
	source,
	searchable = false,
	placeholder = 'Search...',
}: MenuProps) => {
	const host = useHost();
	const slotRef = useRef<HTMLSlotElement>();
	const itemsContainerRef = useRef<HTMLElement>();
	const [query, setQuery] = useState('');

	// Convert slot to source function (if no source prop)
	const slotSource = useSlotSource(slotRef);
	const effectiveSource = source ?? slotSource;

	// Resolve source (handles array, promise, or function)
	const itemsPromise = useLazyProperty(effectiveSource, query);
	const [items, , state] = usePromise(itemsPromise) as [
		MenuItem[] | undefined,
		unknown,
		string,
	];
	const resolvedItems = items ?? [];
	const loading = state === 'pending';

	// Group items by group property
	const grouped = useMemo(() => groupItems(resolvedItems), [resolvedItems]);

	// Handle selection
	const handleSelect = useCallback(
		(item: MenuItem) => {
			host.dispatchEvent(
				new CustomEvent('select', {
					bubbles: true,
					composed: true,
					detail: { item },
				}),
			);
		},
		[host],
	);

	// Fake focus navigation
	const { index, highlight } = useMenuItems({
		items: resolvedItems,
		onSelect: handleSelect,
		host,
		itemsContainerRef,
	});

	// Set role on host
	useEffect(() => {
		host.setAttribute('role', 'menu');
	}, [host]);

	const hasItems = resolvedItems.length > 0;
	const showNoResults = !loading && !hasItems && query.trim().length > 0;

	return html`
		${searchable
			? html`
					<div class="search">
						${searchIcon}
						<input
							class="search-input"
							.value=${query}
							@input=${(e: InputEvent) =>
								setQuery((e.target as HTMLInputElement).value)}
							placeholder=${placeholder}
							autofocus
						/>
					</div>
				`
			: nothing}

		<div
			class="items"
			${ref((el) => {
				itemsContainerRef.current = el as HTMLElement | undefined;
			})}
		>
			${loading ? html`<div class="loading">Loading...</div>` : nothing}
			${showNoResults
				? html`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`
				: nothing}
			${hasItems
				? renderGroupedItems({
						grouped,
						items: resolvedItems,
						highlightedIndex: index,
						highlight,
						select: handleSelect,
					})
				: nothing}

			<!-- Hidden slot for DOM-based items -->
			<slot
				${ref((el) => {
					slotRef.current = el as HTMLSlotElement | undefined;
				})}
				style="display: none"
			></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-menu-next',
	component<MenuProps>(CosmozDropdownMenuNext, {
		styleSheets: [normalize, style],
		observedAttributes: ['searchable', 'placeholder'],
		shadowRootInit: {
			mode: 'open',
			delegatesFocus: true,
		},
	}),
);

export { CosmozDropdownMenuNext };
export type { MenuItem, MenuProps, MenuSource };
