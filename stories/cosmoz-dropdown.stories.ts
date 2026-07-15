import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src';

const meta: Meta = {
	title: 'Cosmoz Dropdown',
	component: 'cosmoz-dropdown',
};

export default meta;

export type Story = StoryObj;

export const Dropdown: Story = {
	render: () => {
		return html`<cosmoz-dropdown>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>
			<div>Item 5</div>
			<button>Item 6</button>
		</cosmoz-dropdown>`;
	},
};

export const DropdownMenu: Story = {
	render: () => {
		return html`<cosmoz-dropdown-menu>
			<span slot="button">Menu</span>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>
			<div>Item 5</div>
			<a href="#">Achor 1</a>
		</cosmoz-dropdown-menu>`;
	},
};

export const DropdownMenuSlotted: Story = {
	name: 'Dropdown Menu – Slotted Elements',
	render: () => {
		return html`<cosmoz-dropdown-menu>
			<span slot="button">Menu</span>
			<button>Button item</button>
			<button disabled>Disabled button</button>
			<a href="#">Anchor item</a>
			<div>Div item</div>
			<div
				style="--cosmoz-dropdown-menu-bg-color: #f0f4ff; --cosmoz-dropdown-menu-color: #1a56db;"
			>
				Custom colors item
			</div>
		</cosmoz-dropdown-menu>`;
	},
};
