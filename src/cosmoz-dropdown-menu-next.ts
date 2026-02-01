import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import {
	component,
	css,
	useCallback,
	useEffect,
	useHost,
	useProperty,
	useRef,
} from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import {
	MENU_NAVIGATE_DOWN,
	MENU_NAVIGATE_END,
	MENU_NAVIGATE_HOME,
	MENU_NAVIGATE_UP,
} from './menu-keybindings';

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
		padding: calc(var(--cz-spacing, 0.25rem) * 2);
		overflow-y: auto;
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
	searchable?: boolean;
	search?: string;
	placeholder?: string;
}

const ITEM_SELECTOR = 'cosmoz-button';
const GROUP_SELECTOR = 'cosmoz-dropdown-menu-group-next';
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
const getGroupItems = (group: Element): Element[] => {
	const slot = getGroupSlot(group);
	return slot ? slot.assignedElements({ flatten: true }) : [];
};

/**
 * Filter a single item based on search text
 */
const filterItem = (item: Element, normalizedSearch: string) => {
	const text = item.textContent?.toLowerCase() || '';
	const matches = !normalizedSearch || text.includes(normalizedSearch);
	item.toggleAttribute('hidden', !matches);
};

/**
 * Get all visible menu items from slotted content.
 * Traverses through groups to find nested items.
 */
const getVisibleItems = (slot: HTMLSlotElement | null): HTMLElement[] => {
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
 * Filter menu items based on search text.
 * Sets [hidden] attribute on items that don't match.
 */
const filterItems = (slot: HTMLSlotElement | null, searchText: string) => {
	if (!slot) return;

	const normalizedSearch = searchText.toLowerCase().trim();
	const elements = slot.assignedElements({ flatten: true });

	for (const el of elements) {
		if (el.matches(ITEM_SELECTOR)) {
			filterItem(el, normalizedSearch);
		} else if (el.matches(GROUP_SELECTOR)) {
			const groupItems = getGroupItems(el);
			for (const item of groupItems) {
				if (item.matches(ITEM_SELECTOR)) {
					filterItem(item, normalizedSearch);
				}
			}
		}
	}
};

/**
 * Custom hook for menu keyboard navigation.
 * Registers activity handlers for arrow key navigation.
 */
const useMenuNavigation = (
	slotRef: { current: HTMLSlotElement | undefined },
	host: HTMLElement,
) => {
	// Navigate to next item (with wrap)
	const navigateDown = useCallback(() => {
		const items = getVisibleItems(slotRef.current ?? null);
		if (items.length === 0) return;

		const root = host.getRootNode() as Document | ShadowRoot;
		const activeElement = root?.activeElement;

		const currentIndex = items.findIndex(
			(item) => item === activeElement || item.contains(activeElement as Node),
		);
		const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
		items[nextIndex]?.focus();
	}, [slotRef, host]);

	// Navigate to previous item (with wrap)
	const navigateUp = useCallback(() => {
		const items = getVisibleItems(slotRef.current ?? null);
		if (items.length === 0) return;

		const root = host.getRootNode() as Document | ShadowRoot;
		const activeElement = root?.activeElement;

		const currentIndex = items.findIndex(
			(item) => item === activeElement || item.contains(activeElement as Node),
		);
		const prevIndex =
			currentIndex < 0
				? items.length - 1
				: (currentIndex - 1 + items.length) % items.length;
		items[prevIndex]?.focus();
	}, [slotRef, host]);

	// Navigate to first item
	const navigateHome = useCallback(() => {
		const items = getVisibleItems(slotRef.current ?? null);
		items[0]?.focus();
	}, [slotRef]);

	// Navigate to last item
	const navigateEnd = useCallback(() => {
		const items = getVisibleItems(slotRef.current ?? null);
		items[items.length - 1]?.focus();
	}, [slotRef]);

	// Register activity handlers
	useActivity(
		{
			activity: MENU_NAVIGATE_DOWN,
			callback: navigateDown,
			element: () => host,
		},
		[navigateDown, host],
	);

	useActivity(
		{
			activity: MENU_NAVIGATE_UP,
			callback: navigateUp,
			element: () => host,
		},
		[navigateUp, host],
	);

	useActivity(
		{
			activity: MENU_NAVIGATE_HOME,
			callback: navigateHome,
			element: () => host,
		},
		[navigateHome, host],
	);

	useActivity(
		{
			activity: MENU_NAVIGATE_END,
			callback: navigateEnd,
			element: () => host,
		},
		[navigateEnd, host],
	);
};

const CosmozDropdownMenuNext = ({
	searchable = false,
	placeholder = 'Search...',
}: MenuProps) => {
	const host = useHost();
	const [search, setSearch] = useProperty<string>('search', '');
	const slotRef = useRef<HTMLSlotElement>();

	// Handle search input
	const handleSearch = useCallback(
		(e: Event) => {
			const value = (e.target as HTMLInputElement).value;
			setSearch(value);
			filterItems(slotRef.current ?? null, value);
		},
		[setSearch],
	);

	// Set up keyboard navigation
	useMenuNavigation(slotRef, host);

	// Close popover when a button is clicked
	useEffect(() => {
		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement;
			const button = target.closest('cosmoz-button');
			if (button && !button.hasAttribute('disabled')) {
				const popover = host.closest('[popover]');
				if (popover instanceof HTMLElement) {
					popover.hidePopover();
				}
			}
		};

		host.addEventListener('click', handleClick);
		return () => host.removeEventListener('click', handleClick);
	}, [host]);

	return html`
		${searchable
			? html`
					<div class="search">
						${searchIcon}
						<input
							class="search-input"
							type="text"
							placeholder=${placeholder}
							.value=${search}
							@input=${handleSearch}
							autofocus
						/>
					</div>
				`
			: nothing}
		<div class="items" role="menu">
			<slot
				${ref((el) => {
					slotRef.current = el as HTMLSlotElement | undefined;
				})}
			></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-menu-next',
	component<MenuProps>(CosmozDropdownMenuNext, {
		styleSheets: [normalize, style],
		observedAttributes: ['searchable', 'search', 'placeholder'],
	}),
);
