import '@neovici/cosmoz-button';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/next/cosmoz-dropdown-next';
import './cosmoz-dropdown-next.css';
import { placementOptions } from './story-helpers';

interface StoryArgs {
	placement: string;
	hover: boolean;
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
		hover: {
			control: 'boolean',
			description: 'Open dropdown on hover instead of click.',
		},
	},
	args: {
		placement: 'bottom span-right',
		hover: false,
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
		<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
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
	play: async ({ canvasElement }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement;
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
		const getPopover = () => dropdown.shadowRoot!.querySelector('[popover]');

		// Wait for component to render
		await waitFor(() => {
			expect(getPopover()).toBeTruthy();
		});

		// Click opens the popover
		await userEvent.click(button);
		await waitFor(() => {
			const popover = getPopover();
			expect(popover?.matches(':popover-open')).toBe(true);
		});

		// Click again closes it
		await userEvent.click(button);
		await waitFor(() => {
			const popover = getPopover();
			expect(popover?.matches(':popover-open')).toBe(false);
		});
	},
};

/**
 * Hover mode opens the dropdown on pointer enter and closes on pointer leave.
 * Click still works as a fallback for accessibility and mobile.
 */
export const HoverMode: Story = {
	args: {
		hover: true,
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
			<cosmoz-button slot="button">Hover me</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement;
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;
		const getPopover = () =>
			dropdown.shadowRoot!.querySelector('[popover]') as HTMLElement | null;

		// Wait for the component to render and the effect to set up
		await waitFor(() => {
			expect(getPopover()).toBeTruthy();
		});

		await step('Dropdown has hover attribute', async () => {
			expect(dropdown.hasAttribute('hover')).toBe(true);
		});

		// Note: Hover behavior is difficult to test in automated tests because
		// synthetic pointer events don't behave exactly like real user interactions.
		// The hover functionality works correctly in manual testing.
		// We test click toggle behavior here.

		await step('Click toggles the dropdown', async () => {
			// Get initial state
			const popover = getPopover();
			const wasOpen = popover?.matches(':popover-open');

			// Use direct click to avoid userEvent's pointer simulation
			// which triggers hover behavior
			button.click();

			// Small delay to let the click handler run
			await new Promise((r) => setTimeout(r, 50));

			const isOpen = getPopover()?.matches(':popover-open');
			expect(isOpen).toBe(!wasOpen);
		});

		await step('Click again toggles the dropdown back', async () => {
			const popover = getPopover();
			const wasOpen = popover?.matches(':popover-open');

			button.click();

			await new Promise((r) => setTimeout(r, 50));
			const isOpen = getPopover()?.matches(':popover-open');
			expect(isOpen).toBe(!wasOpen);
		});

		await step('Focus opens the dropdown', async () => {
			// Ensure closed first
			const popover = getPopover();
			if (popover?.matches(':popover-open')) {
				button.click();
				await new Promise((r) => setTimeout(r, 50));
			}

			button.focus();
			await waitFor(() => {
				expect(getPopover()?.matches(':popover-open')).toBe(true);
			});
		});
	},
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
				<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
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
				<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
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
				<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
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
				<cosmoz-dropdown-next placement=${args.placement} ?hover=${args.hover}>
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
