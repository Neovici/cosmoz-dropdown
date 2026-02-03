import '@neovici/cosmoz-button';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/next/cosmoz-dropdown-next';
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

const contentStyle = `
	background: var(--cz-color-bg-primary);
	border-radius: var(--cz-radius-md);
	box-shadow: var(--cz-shadow-lg);
	padding: calc(var(--cz-spacing) * 2);
`;

/**
 * Basic dropdown with custom content.
 * Click the button to toggle the popover.
 */
export const Basic: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Menu</cosmoz-button>
			<div style=${contentStyle}>
				<input
					type="text"
					placeholder="Search..."
					style="margin-bottom: 8px; padding: 4px;"
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
		<div
			style="
				position: relative;
				height: 100vh;
				padding: 8px;
				box-sizing: border-box;
			"
		>
			<!-- Top Left -->
			<div style="position: absolute; top: 8px; left: 8px;">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Top Left</cosmoz-button>
					<div style=${contentStyle}>
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Top Right -->
			<div style="position: absolute; top: 8px; right: 8px;">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Top Right</cosmoz-button>
					<div style=${contentStyle}>
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Bottom Left -->
			<div style="position: absolute; bottom: 8px; left: 8px;">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Bottom Left</cosmoz-button>
					<div style=${contentStyle}>
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>

			<!-- Bottom Right -->
			<div style="position: absolute; bottom: 8px; right: 8px;">
				<cosmoz-dropdown-next placement=${args.placement}>
					<cosmoz-button slot="button">Bottom Right</cosmoz-button>
					<div style=${contentStyle}>
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
				</cosmoz-dropdown-next>
			</div>
		</div>
	`,
};
