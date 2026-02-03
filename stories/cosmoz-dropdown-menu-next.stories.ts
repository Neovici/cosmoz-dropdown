import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from 'storybook/test';
import '../src/next/cosmoz-dropdown-menu-next';
import '../src/next/cosmoz-dropdown-next';
import '../src/next/cosmoz-keybinding-badge';
import '../src/next/cosmoz-menu-label';
import type { MenuItem } from '../src/next/types';

/**
 * Common CSS anchor position-area values for dropdown placement.
 * See MDN position-area for the full list of available values.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position-area
 */
const placementOptions = [
	// Most common - dropdown below/above anchor
	'bottom span-right',
	'bottom span-left',
	'bottom',
	'top span-right',
	'top span-left',
	'top',
	// Side placements
	'right span-bottom',
	'right span-top',
	'right',
	'left span-bottom',
	'left span-top',
	'left',
	// Centered variants
	'bottom center',
	'top center',
	'center',
];

// Icons for the stories
// prettier-ignore
/* eslint-disable max-len */
const copyIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`;

const editIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26465C18.1294 3.55059 18.1904 3.85706 18.1904 4.16667C18.1904 4.47627 18.1294 4.78275 18.0109 5.06868C17.8925 5.35462 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const deleteIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M2.5 5H4.16667H17.5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const shareIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7.15833 11.2583L12.85 14.575"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.8417 5.42499L7.15833 8.74166"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const downloadIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const cutIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6.91667 6.91667L17.5 17.5M17.5 2.5L6.91667 13.0833"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const pasteIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M13.3333 3.33333H15C15.442 3.33333 15.866 3.50893 16.1785 3.82149C16.4911 4.13405 16.6667 4.55797 16.6667 5V16.6667C16.6667 17.1087 16.4911 17.5326 16.1785 17.8452C15.866 18.1577 15.442 18.3333 15 18.3333H5C4.55797 18.3333 4.13405 18.1577 3.82149 17.8452C3.50893 17.5326 3.33333 17.1087 3.33333 16.6667V5C3.33333 4.55797 3.50893 4.13405 3.82149 3.82149C4.13405 3.50893 4.55797 3.33333 5 3.33333H6.66667"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.5 1.66667H7.5C7.03976 1.66667 6.66667 2.03976 6.66667 2.5V4.16667C6.66667 4.6269 7.03976 5 7.5 5H12.5C12.9602 5 13.3333 4.6269 13.3333 4.16667V2.5C13.3333 2.03976 12.9602 1.66667 12.5 1.66667Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const duplicateIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const filterIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M18.3333 2.5H1.66667L8.33333 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;
/* eslint-enable max-len */

// Helper to create keybinding badges
const keybinding = (keys: string) => html`
	<cosmoz-keybinding-badge>${keys}</cosmoz-keybinding-badge>
`;

// Helper to create count badges for filter items
const count = (n: number) => html`
	<span
		style="
			font-size: var(--cz-text-xs, 0.75rem);
			color: var(--cz-color-text-tertiary, #667085);
			background: var(--cz-color-bg-secondary, #f9fafb);
			padding: 2px 8px;
			border-radius: var(--cz-radius-full, 9999px);
		"
		>${n}</span
	>
`;

// Sample menu items for data-driven examples
const basicItems: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{ label: 'Edit', value: 'edit', icon: editIcon, suffix: keybinding('⌘E') },
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
];

const searchableItems: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{ label: 'Cut', value: 'cut', icon: cutIcon, suffix: keybinding('⌘X') },
	{ label: 'Paste', value: 'paste', icon: pasteIcon, suffix: keybinding('⌘V') },
	{ label: 'Edit', value: 'edit', icon: editIcon, suffix: keybinding('⌘E') },
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
	{
		label: 'Duplicate',
		value: 'duplicate',
		icon: duplicateIcon,
		suffix: keybinding('⌘D'),
	},
	{
		label: 'Share',
		value: 'share',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Download',
		value: 'download',
		icon: downloadIcon,
		suffix: keybinding('⌘⇧D'),
	},
];

const groupedItems: MenuItem[] = [
	{
		label: 'Copy',
		value: 'copy',
		group: 'Clipboard',
		icon: copyIcon,
		suffix: keybinding('⌘C'),
	},
	{
		label: 'Cut',
		value: 'cut',
		group: 'Clipboard',
		icon: cutIcon,
		suffix: keybinding('⌘X'),
	},
	{
		label: 'Paste',
		value: 'paste',
		group: 'Clipboard',
		icon: pasteIcon,
		suffix: keybinding('⌘V'),
	},
	{
		label: 'Edit',
		value: 'edit',
		group: 'Actions',
		icon: editIcon,
		suffix: keybinding('⌘E'),
	},
	{
		label: 'Share',
		value: 'share',
		group: 'Actions',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Download',
		value: 'download',
		group: 'Actions',
		icon: downloadIcon,
		suffix: keybinding('⌘⇧D'),
	},
	{
		label: 'Delete',
		value: 'delete',
		group: 'Danger Zone',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
];

const itemsWithDisabled: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{
		label: 'Edit',
		value: 'edit',
		icon: editIcon,
		suffix: keybinding('⌘E'),
		disabled: true,
	},
	{
		label: 'Share',
		value: 'share',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
		disabled: true,
	},
];

// Filter menu items with grouped options and counts
const filterItems: MenuItem[] = [
	// Status group
	{
		label: 'Active',
		value: 'status:active',
		group: 'Status',
		suffix: count(24),
	},
	{
		label: 'Pending',
		value: 'status:pending',
		group: 'Status',
		suffix: count(12),
	},
	{
		label: 'Completed',
		value: 'status:completed',
		group: 'Status',
		suffix: count(89),
	},
	{
		label: 'Archived',
		value: 'status:archived',
		group: 'Status',
		suffix: count(5),
	},
	// Priority group
	{
		label: 'Urgent',
		value: 'priority:urgent',
		group: 'Priority',
		suffix: count(3),
	},
	{
		label: 'High',
		value: 'priority:high',
		group: 'Priority',
		suffix: count(8),
	},
	{
		label: 'Medium',
		value: 'priority:medium',
		group: 'Priority',
		suffix: count(45),
	},
	{ label: 'Low', value: 'priority:low', group: 'Priority', suffix: count(67) },
	// Type group
	{ label: 'Bug', value: 'type:bug', group: 'Type', suffix: count(15) },
	{ label: 'Feature', value: 'type:feature', group: 'Type', suffix: count(32) },
	{ label: 'Task', value: 'type:task', group: 'Type', suffix: count(78) },
];

/**
 * Creates a searchable source function from a static array.
 * Filters items by label matching the query (case-insensitive).
 *
 * TODO: Investigate making the component filter static arrays automatically
 * when `searchable` is enabled, to simplify the API for common use cases.
 */
const makeSearchable = (items: MenuItem[]) => (query: string) => {
	if (!query.trim()) return items;
	const q = query.toLowerCase();
	return items.filter((item) => item.label.toLowerCase().includes(q));
};

interface StoryArgs {
	searchable: boolean;
	placeholder: string;
	placement: string;
	onSelect: (e: CustomEvent) => void;
}

const meta: Meta<StoryArgs> = {
	title: 'Cosmoz Dropdown Menu Next',
	component: 'cosmoz-dropdown-menu-next',
	tags: ['autodocs'],
	argTypes: {
		searchable: {
			control: 'boolean',
			description: 'Show search input',
		},
		placeholder: {
			control: 'text',
			description: 'Search input placeholder text',
		},
		placement: {
			control: 'select',
			options: placementOptions,
			description:
				'CSS anchor position-area value. See MDN for all available options.',
		},
		onSelect: {
			action: 'select',
			description: 'Fired when a menu item is selected',
		},
	},
	args: {
		searchable: false,
		placeholder: 'Search...',
		placement: 'bottom span-right',
		onSelect: fn(),
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

/**
 * Basic menu with items using data-driven source.
 * Click the button to open the dropdown menu.
 */
export const Basic: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${basicItems}
				@select=${args.onSelect}
			></cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with search functionality.
 * Type to filter menu items.
 */
export const WithSearch: Story = {
	args: {
		searchable: true,
		placeholder: 'Search actions...',
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Searchable Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${makeSearchable(searchableItems)}
				@select=${args.onSelect}
			></cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with grouped items.
 * Items are organized into sections with labels.
 */
export const WithGroups: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Grouped Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${groupedItems}
				@select=${args.onSelect}
			></cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with grouped items and search.
 * Combines grouping with filtering capability.
 */
export const WithGroupsAndSearch: Story = {
	args: {
		searchable: true,
		placeholder: 'Type a command...',
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Grouped Searchable Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${makeSearchable(groupedItems)}
				@select=${args.onSelect}
			>
				<div slot="no-results">
					<p style="padding: 16px; text-align: center; color: #666;">
						No commands found. Try a different search term.
					</p>
				</div>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with disabled items.
 * Disabled items cannot be selected and are skipped during keyboard navigation.
 */
export const WithDisabledItems: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Menu with Disabled Items</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${itemsWithDisabled}
				@select=${args.onSelect}
			></cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Async source - simulates loading items from an API.
 * Shows a loading state while fetching data.
 */
export const AsyncSource: Story = {
	args: {
		searchable: true,
		placeholder: 'Search (async)...',
	},
	render: (args) => {
		const asyncSource = async (query: string): Promise<MenuItem[]> => {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 500));

			const allItems = searchableItems;
			if (!query.trim()) return allItems;

			const q = query.toLowerCase();
			return allItems.filter((item) => item.label.toLowerCase().includes(q));
		};

		return html`
			<cosmoz-dropdown-next placement=${args.placement}>
				<cosmoz-button slot="button">Open Async Menu</cosmoz-button>
				<cosmoz-dropdown-menu-next
					autofocus
					?searchable=${args.searchable}
					placeholder=${args.placeholder}
					.source=${asyncSource}
					@select=${args.onSelect}
				></cosmoz-dropdown-menu-next>
			</cosmoz-dropdown-next>
		`;
	},
};

/**
 * Filter menu with grouped options and counts.
 * Useful for filtering lists or tables by multiple criteria.
 */
export const FilterMenu: Story = {
	args: {
		searchable: true,
		placeholder: 'Filter by...',
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button" variant="secondary">
				${filterIcon} Filters
			</cosmoz-button>
			<cosmoz-dropdown-menu-next
				autofocus
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				.source=${makeSearchable(filterItems)}
				@select=${args.onSelect}
			></cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};
