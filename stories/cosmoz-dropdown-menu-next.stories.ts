import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from 'storybook/test';
import '../src/next/cosmoz-dropdown-menu-next';
import '../src/next/cosmoz-dropdown-next';
import '../src/next/cosmoz-keybinding-badge';
import '../src/next/cosmoz-menu-label';
import type { MenuItem } from '../src/next/types';
import {
	basicItems,
	filterIcon,
	filterItems,
	groupedItems,
	itemsWithDisabled,
	makeSearchable,
	placementOptions,
	searchableItems,
} from './story-helpers';

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

/** Basic menu with items using data-driven source. */
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

/** Menu with search functionality. Type to filter menu items. */
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

/** Menu with grouped items organized into sections with labels. */
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

/** Menu with grouped items and search. Combines grouping with filtering. */
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

/** Disabled items cannot be selected and are skipped during keyboard nav. */
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

/** Async source - simulates loading items from an API. */
export const AsyncSource: Story = {
	args: {
		searchable: true,
		placeholder: 'Search (async)...',
	},
	render: (args) => {
		const asyncSource = async (query: string): Promise<MenuItem[]> => {
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

/** Filter menu with grouped options and counts. */
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
