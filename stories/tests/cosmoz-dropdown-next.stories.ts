import '@neovici/cosmoz-button';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/next/cosmoz-dropdown-next';
import '../cosmoz-dropdown-next.css';

interface StoryArgs {
	placement: string;
}

const meta: Meta<StoryArgs> = {
	title: 'Tests/Cosmoz Dropdown Next',
	component: 'cosmoz-dropdown-next',
	tags: ['!autodocs'],
	args: {
		placement: 'bottom span-right',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

const getPopover = (dropdown: HTMLElement) =>
	dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;

/**
 * Verifies the popover closes when focus leaves the dropdown.
 * The native Popover API only handles click-outside and Escape;
 * this tests the focusout handler that fills the Tab-out gap.
 */
export const CloseOnFocusout: Story = {
	render: (args) => html`
		<div>
			<cosmoz-dropdown-next placement=${args.placement}>
				<cosmoz-button slot="button">Toggle</cosmoz-button>
				<div class="dropdown-content">
					<button id="inside">Inside</button>
				</div>
			</cosmoz-dropdown-next>
			<button id="outside" style="margin-top: 1rem;">Outside</button>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement;
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
		const inside = dropdown.querySelector('#inside') as HTMLElement;
		const outside = canvasElement.querySelector('#outside') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open the dropdown', async () => {
			await userEvent.click(button);
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
			});
		});

		await step('Focus inside then outside closes the dropdown', async () => {
			inside.focus();
			outside.focus();
			await new Promise((r) => setTimeout(r, 150));
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
		});
	},
};

/**
 * Verifies focus movement between elements inside the popover
 * does not close it. The debounced scheduleClose re-checks
 * :focus-within before closing.
 */
export const FocusWithinStaysOpen: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<button id="first">First</button>
				<button id="second">Second</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement;
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
		const first = dropdown.querySelector('#first') as HTMLElement;
		const second = dropdown.querySelector('#second') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open the dropdown', async () => {
			await userEvent.click(button);
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
			});
		});

		await step('Moving focus within the popover keeps it open', async () => {
			first.focus();
			second.focus();
			await new Promise((r) => setTimeout(r, 150));
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
		});
	},
};

/**
 * Verifies the focus() -> blur() close pattern works.
 * This is how cosmoz-omnitable-settings closes its dropdown
 * programmatically without relying on open-on-focus.
 */
export const FocusBlurClose: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<button id="close-btn">Close</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement;
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
		const closeBtn = dropdown.querySelector('#close-btn') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open the dropdown', async () => {
			await userEvent.click(button);
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
			});
		});

		await step('focus() then blur() closes the dropdown', async () => {
			closeBtn.focus();
			closeBtn.blur();
			await new Promise((r) => setTimeout(r, 150));
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
		});
	},
};
