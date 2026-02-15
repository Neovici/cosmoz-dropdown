import '@neovici/cosmoz-button';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, waitFor } from 'storybook/test';
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
 * Verifies that setting `opened = true` programmatically opens the popover
 * and reflects the `opened` attribute on the host element.
 */
export const OpenedPropertyOpens: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
				<div>Item 2</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Popover is initially closed', async () => {
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
			expect(dropdown.opened).toBe(false);
			expect(dropdown.hasAttribute('opened')).toBe(false);
		});

		await step('Setting opened = true opens the popover', async () => {
			dropdown.opened = true;
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
				expect(dropdown.hasAttribute('opened')).toBe(true);
			});
		});
	},
};

/**
 * Verifies that setting `opened = false` programmatically closes an open
 * popover and removes the `opened` attribute.
 */
export const OpenedPropertyCloses: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
				<div>Item 2</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open via click', async () => {
			button.click();
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
				expect(dropdown.opened).toBe(true);
				expect(dropdown.hasAttribute('opened')).toBe(true);
			});
		});

		await step('Setting opened = false closes the popover', async () => {
			dropdown.opened = false;
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
				expect(dropdown.hasAttribute('opened')).toBe(false);
			});
		});
	},
};

/**
 * Verifies that browser-initiated close (e.g., light-dismiss, Escape)
 * syncs the `opened` property and attribute back to `false`.
 *
 * We simulate by calling `hidePopover()` directly on the native popover
 * element, which fires the same `toggle` event that light-dismiss and
 * Escape produce. Synthetic click-outside and keyboard Escape don't
 * reliably reach the top-layer popover in storybook's test iframe.
 */
export const NativeCloseSyncsProperty: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open via property', async () => {
			dropdown.opened = true;
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
			});
		});

		await step(
			'Native hidePopover() syncs property back to false',
			async () => {
				// Simulate browser-initiated close (light-dismiss / Escape).
				// hidePopover() fires the native toggle event, same as
				// light-dismiss and Escape key.
				getPopover(dropdown)!.hidePopover();
				await waitFor(() => {
					expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
					expect(dropdown.opened).toBe(false);
					expect(dropdown.hasAttribute('opened')).toBe(false);
				});
			},
		);
	},
};

/**
 * Verifies that `opened-changed` events fire when the state changes
 * via user interactions (click to open, Escape to close).
 *
 * Note: `opened-changed` is dispatched by `useProperty`'s internal setter,
 * which is called from `toggle()` (click) and `onToggle` (Escape/light-dismiss).
 * Direct property assignment (`dropdown.opened = true`) bypasses the setter
 * and does not dispatch the event — this is by design, matching the
 * convention of other `useProperty`-based components.
 */
export const OpenedChangedEvent: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		const events: boolean[] = [];
		dropdown.addEventListener('opened-changed', ((
			e: CustomEvent<{ value: boolean }>,
		) => {
			events.push(e.detail.value);
		}) as EventListener);

		await step('Click to open fires opened-changed with true', async () => {
			button.click();
			await waitFor(() => {
				expect(events).toContain(true);
			});
		});

		await step('Click to close fires opened-changed with false', async () => {
			button.click();
			await waitFor(() => {
				expect(events).toContain(false);
			});
		});
	},
};

/**
 * Verifies that the `opened` attribute is reflected on the host element:
 * present when open, absent when closed.
 */
export const AttributeReflection: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Initially no opened attribute', async () => {
			expect(dropdown.hasAttribute('opened')).toBe(false);
		});

		await step('opened = true adds attribute', async () => {
			dropdown.opened = true;
			await waitFor(() => {
				expect(dropdown.hasAttribute('opened')).toBe(true);
			});
		});

		await step('opened = false removes attribute', async () => {
			dropdown.opened = false;
			await waitFor(() => {
				expect(dropdown.hasAttribute('opened')).toBe(false);
			});
		});
	},
};

/**
 * Verifies that a parent component can programmatically close the dropdown
 * by setting `.opened = false` on the element.
 */
export const ProgrammaticCloseFromParent: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<button id="inside">Inside</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;

		await waitFor(() => {
			expect(getPopover(dropdown)).toBeTruthy();
		});

		await step('Open via click', async () => {
			button.click();
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
				expect(dropdown.opened).toBe(true);
			});
		});

		await step('Programmatic close via .opened = false', async () => {
			// Simulate a parent component closing the dropdown
			dropdown.opened = false;
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
				expect(dropdown.opened).toBe(false);
				expect(dropdown.hasAttribute('opened')).toBe(false);
			});
		});
	},
};
