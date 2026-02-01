import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-dropdown-next';

const meta: Meta = {
	title: 'Cosmoz Dropdown Next',
	component: 'cosmoz-dropdown-next',
};

export default meta;

export type Story = StoryObj;

const contentStyle = `
	background: var(--cz-color-bg-primary);
	border-radius: var(--cz-radius-md);
	box-shadow: var(--cz-shadow-lg);
	padding: calc(var(--cz-spacing) * 2);
`;

export const DropdownNext: Story = {
	render: () => {
		return html`<cosmoz-dropdown-next>
			<button slot="button">Open Menu</button>
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
		</cosmoz-dropdown-next>`;
	},
};

export const PositionFallbacks: Story = {
	render: () => {
		return html`
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
					<cosmoz-dropdown-next>
						<button slot="button">Top Left</button>
						<div style=${contentStyle}>
							<div>Item 1</div>
							<div>Item 2</div>
							<div>Item 3</div>
						</div>
					</cosmoz-dropdown-next>
				</div>

				<!-- Top Right -->
				<div style="position: absolute; top: 8px; right: 8px;">
					<cosmoz-dropdown-next>
						<button slot="button">Top Right</button>
						<div style=${contentStyle}>
							<div>Item 1</div>
							<div>Item 2</div>
							<div>Item 3</div>
						</div>
					</cosmoz-dropdown-next>
				</div>

				<!-- Bottom Left -->
				<div style="position: absolute; bottom: 8px; left: 8px;">
					<cosmoz-dropdown-next>
						<button slot="button">Bottom Left</button>
						<div style=${contentStyle}>
							<div>Item 1</div>
							<div>Item 2</div>
							<div>Item 3</div>
						</div>
					</cosmoz-dropdown-next>
				</div>

				<!-- Bottom Right -->
				<div style="position: absolute; bottom: 8px; right: 8px;">
					<cosmoz-dropdown-next>
						<button slot="button">Bottom Right</button>
						<div style=${contentStyle}>
							<div>Item 1</div>
							<div>Item 2</div>
							<div>Item 3</div>
						</div>
					</cosmoz-dropdown-next>
				</div>
			</div>
		`;
	},
};
