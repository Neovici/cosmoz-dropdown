import '@neovici/cosmoz-button';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/next/cosmoz-dropdown-next';
import './cosmoz-dropdown-next.css';
import { placementOptions } from './story-helpers';

interface StoryArgs {
	placement: string;
}

const meta: Meta<StoryArgs> = {
	title: 'Cosmoz Dropdown Next',
	component: 'cosmoz-dropdown-next',
	tags: ['autodocs'],
	argTypes: {
		placement: {
			control: 'select',
			options: placementOptions,
			description:
				'CSS anchor position-area value. See MDN for all available options.',
		},
	},
	args: {
		placement: 'bottom span-right',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

/**
 * Basic dropdown with custom content.
 * Click the button to toggle the popover.
 */
export const Basic: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Menu</cosmoz-button>
			<div class="dropdown-content">
				<input
					type="text"
					placeholder="Search..."
					class="dropdown-search-input"
					autofocus
				/>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</div>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Demonstrates position fallbacks when near viewport edges.
 * The dropdown will flip to stay visible when there's not enough space.
 */
export const PositionFallbacks: Story = {
	render: (args) => html`
		<div class="position-grid">
			<!-- Top Left -->
			<div class="position-top-left">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Top Left</cosmoz-button>
					<div class="dropdown-content">
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Top Right -->
			<div class="position-top-right">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Top Right</cosmoz-button>
					<div class="dropdown-content">
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Bottom Left -->
			<div class="position-bottom-left">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Bottom Left</cosmoz-button>
					<div class="dropdown-content">
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Bottom Right -->
			<div class="position-bottom-right">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Bottom Right</cosmoz-button>
					<div class="dropdown-content">
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>
		</div>
	`,
};
