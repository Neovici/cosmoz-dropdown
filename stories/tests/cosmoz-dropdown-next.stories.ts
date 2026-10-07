import '@neovici/cosmoz-button';
import { component, html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import {
	expect,
	userEvent as storybookUserEvent,
	waitFor,
} from 'storybook/test';
import { userEvent as trustedUserEvent } from 'vitest/browser';
import '../../src/next/cosmoz-dropdown-next';
import '../cosmoz-dropdown-next.css';

// storybook/test's userEvent dispatches synthetic events (verified: keyboard
// isTrusted=false; synthetic clicks leave focus untouched). Trusted (CDP)
// interaction goes through vitest's browser userEvent.
const userEvent = trustedUserEvent as unknown as typeof storybookUserEvent & {
	click(t: HTMLElement): Promise<void>;
};

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
				getPopover(dropdown)!.hidePopover?.();
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

/**
 * Verifies that when `disabled` + `passthrough` are both set, the default
 * slot renders in normal document flow — no popover element exists in the
 * shadow DOM, and the slotted content is visible.
 */
export const PassthroughRendersInline: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} disabled passthrough>
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
		) as HTMLElement;

		await step('No popover element in shadow DOM', async () => {
			const popover = dropdown.shadowRoot!.querySelector('[popover]');
			expect(popover).toBeNull();
		});

		await step('Default slot is rendered inline', async () => {
			const slot = dropdown.shadowRoot!.querySelector('slot:not([name])');
			expect(slot).toBeTruthy();
			expect(slot!.closest('[popover]')).toBeNull();
		});

		await step('Slotted content is visible', async () => {
			const slot = dropdown.shadowRoot!.querySelector(
				'slot:not([name])',
			) as HTMLSlotElement;
			const assigned = slot.assignedElements({ flatten: true });
			expect(assigned.length).toBeGreaterThan(0);
		});
	},
};

/**
 * Verifies that `passthrough` without `disabled` has no effect — the popover
 * element is still rendered and the dropdown behaves normally.
 */
export const PassthroughWithoutDisabled: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} passthrough>
			<cosmoz-button slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content">
				<div>Item 1</div>
			</div>
		</cosmoz-dropdown-next>
	`,
	// storybookUserEvent's synthetic clicks are intentional here: the story pins the
	// toggle *mechanics*; trusted-click dismissal is light-dismiss+toggle, which
	// double-applies today (tracked as reopen-flicker; not this PR's scope).
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const button = dropdown.querySelector('[slot="button"]') as HTMLElement;

		await step(
			'Popover element exists (passthrough without disabled has no effect)',
			async () => {
				const popover = dropdown.shadowRoot!.querySelector('[popover]');
				expect(popover).toBeTruthy();
			},
		);

		await step('Click toggles popover normally', async () => {
			await storybookUserEvent.click(button);
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true);
			});
		});

		await step('Click closes popover normally', async () => {
			await storybookUserEvent.click(button);
			await waitFor(() => {
				expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false);
			});
		});
	},
};

/**
 * The dropdown reconciles the slotted invoker's `aria-expanded` to the
 * popover's own toggle state, over every close path - the opened API,
 * hidePopover (as Escape / light dismiss report themselves), and a
 * `select` dispatched from inside the content.
 */
export const InvokerAriaReconciles: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<button slot="button" class="invoker">Toggle</button>
			<div class="dropdown-content">
				<button class="pick">Item 1</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const button = dropdown.querySelector('.invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;

		await step('states false before the first toggle', async () => {
			expect(button.getAttribute('aria-expanded')).toBe('false');
		});

		await step('opening reconciles', async () => {
			dropdown.opened = true;
			await waitFor(() =>
				expect(button.getAttribute('aria-expanded')).toBe('true'),
			);
		});

		await step('platform close also reconciles', async () => {
			popover.hidePopover();
			await waitFor(() =>
				expect(button.getAttribute('aria-expanded')).toBe('false'),
			);
		});

		await step('and a select-close', async () => {
			dropdown.opened = true;
			await waitFor(() =>
				expect(button.getAttribute('aria-expanded')).toBe('true'),
			);
			dropdown
				.querySelector('.pick')!
				.dispatchEvent(new Event('select', { bubbles: true }));
			await waitFor(() =>
				expect(button.getAttribute('aria-expanded')).toBe('false'),
			);
		});
	},
};

/**
 * A custom-element invoker (e.g. cosmoz-button) has no light-DOM control
 * of its own: the dropdown states the host attribute, and the invoker
 * forwards to its native control from there.
 */
export const InvokerAriaOnCustomElementInvoker: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button class="cz" slot="button">Toggle</cosmoz-button>
			<div class="dropdown-content"><button class="pick">Item 1</button></div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const cz = dropdown.querySelector('.cz') as HTMLElement;
		const popover = getPopover(dropdown)!;

		// the dropdown states the invoker on mount
		expect(cz.getAttribute('aria-expanded')).toBe('false');

		dropdown.opened = true;
		await waitFor(() => {
			expect(cz.getAttribute('aria-expanded')).toBe('true');
			expect(
				cz.shadowRoot!.querySelector('button')!.getAttribute('aria-expanded'),
			).toBe('true');
		});

		popover.hidePopover();
		await waitFor(() => {
			expect(cz.getAttribute('aria-expanded')).toBe('false');
			expect(
				cz.shadowRoot!.querySelector('button')!.getAttribute('aria-expanded'),
			).toBe('false');
		});
	},
};

/**
 * An invoker slotted after mount reconciles with the popover's current
 * state via slotchange.
 */
export const LateInvokerReconciles: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} class="late">
			<div class="dropdown-content"><button class="pick">Item 1</button></div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next.late',
		) as HTMLElement & { opened: boolean };
		const popover = getPopover(dropdown)!;
		const invoker = document.createElement('button');
		invoker.setAttribute('slot', 'button');
		invoker.className = 'late-invoker';
		invoker.textContent = 'Late toggle';

		dropdown.opened = true;
		await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
		dropdown.appendChild(invoker);
		await waitFor(() =>
			expect(invoker.getAttribute('aria-expanded')).toBe('true'),
		);
		popover.hidePopover();
		await waitFor(() =>
			expect(invoker.getAttribute('aria-expanded')).toBe('false'),
		);
	},
};

/** no slotted invoker, nothing to reconcile: opens and closes as before */
export const InvokerAriaWithoutInvokerIsANoop: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} class="noinvoker">
			<div class="dropdown-content"><div>Item 1</div></div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next.noinvoker',
		) as HTMLElement & { opened: boolean };
		expect(dropdown.getAttribute('aria-expanded')).toBeNull();
		dropdown.opened = true;
		await waitFor(() =>
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(true),
		);
		expect(dropdown.getAttribute('aria-expanded')).toBeNull();
		dropdown.opened = false;
		await waitFor(() =>
			expect(getPopover(dropdown)?.matches(':popover-open')).toBe(false),
		);
		expect(dropdown.getAttribute('aria-expanded')).toBeNull();
	},
};

const deepestFocus = (): HTMLElement | null => {
	let el = document.activeElement as HTMLElement | null;
	while (el?.shadowRoot) {
		el = el.shadowRoot.activeElement as HTMLElement | null;
	}
	return el;
};

/** dismissal restore: Escape closes with focus inside, focus lands back on the invoker */
export const DismissalRestoresInvoker: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<button slot="button" class="invoker">Toggle</button>
			<div class="dropdown-content">
				<button class="pick" autofocus>Item 1</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const invoker = dropdown.querySelector('.invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;

		await step(
			'open with focus inside (autofocus lands on the pick)',
			async () => {
				await userEvent.click(invoker);
				await waitFor(() =>
					expect(popover.matches(':popover-open')).toBe(true),
				);
			},
		);

		await step('dismissal returns focus to the invoker', async () => {
			// hidePopover: the platform-close stand-in (Escape/light-dismiss
			// report the same close-request state; trusted keys are not
			// reachable from this harness - userEvent.keyboard is synthetic)
			popover.hidePopover();
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
			expect(deepestFocus()).toBe(invoker);
		});
	},
};

/** select-close restores to the invoker in steady state (the picked row's DOM dies) */
export const SelectCloseRestoresInvoker: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<button slot="button" class="invoker">Toggle</button>
			<div class="dropdown-content">
				<button class="pick" autofocus>Item 1</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const invoker = dropdown.querySelector('.invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;

		await step('open, focus the pick, select it', async () => {
			invoker.focus();
			await userEvent.click(invoker);
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
			(dropdown.querySelector('.pick') as HTMLElement).focus();
			dropdown
				.querySelector('.pick')!
				.dispatchEvent(new Event('select', { bubbles: true }));
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
		});

		await step('steady state: focus is on the invoker', async () => {
			await new Promise((r) => setTimeout(r, 300));
			expect(deepestFocus()).toBe(invoker);
		});
	},
};

/** focus moved away on purpose (tab-out / click-out) is not restored over */
export const FocusMovedStays: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<button slot="button" class="invoker">Toggle</button>
			<div class="dropdown-content">
				<button class="pick" autofocus>Item 1</button>
			</div>
		</cosmoz-dropdown-next>
		<button id="outside">Outside</button>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const invoker = dropdown.querySelector('.invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;
		const outside = canvasElement.querySelector('#outside') as HTMLElement;

		await step('open, then move focus outside on purpose', async () => {
			invoker.focus();
			await userEvent.click(invoker);
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
			(dropdown.querySelector('.pick') as HTMLElement).focus(); // real focus inside first
			outside.focus();
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
		});

		await step('the deliberate focus move sticks', async () => {
			await new Promise((r) => setTimeout(r, 300));
			expect(deepestFocus()).toBe(outside);
		});
	},
};

/** dismissal with open-on-focus stays closed (no reopen loop) and restores */
export const OpenOnFocusDismissalStaysClosed: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement} open-on-focus>
			<button slot="button" class="invoker">Toggle</button>
			<div class="dropdown-content">
				<button class="pick" autofocus>Item 1</button>
			</div>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, step }) => {
		const dropdown = canvasElement.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const invoker = dropdown.querySelector('.invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;

		await step('open-on-focus opens', async () => {
			invoker.focus();
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
		});

		await step('dismissal closes and stays closed', async () => {
			popover.hidePopover();
			await new Promise((r) => setTimeout(r, 400));
			// beyond the #76 reopen loop's settle window: still closed
			expect(popover.matches(':popover-open')).toBe(false);
			expect(deepestFocus()).toBe(invoker);
		});
	},
};

/** the nested shadow geometry: dismissal restores the projected invoker */
export const DismissalRestoresInvokerNestedShadow: Story = {
	render: () => html`<nested-dropdown-host></nested-dropdown-host>`,
	play: async ({ canvasElement, step }) => {
		const nestedHost = canvasElement.querySelector(
			'nested-dropdown-host',
		) as HTMLElement;
		const shadow = nestedHost.shadowRoot!;
		const dropdown = shadow.querySelector(
			'cosmoz-dropdown-next',
		) as HTMLElement & { opened: boolean };
		const invoker = shadow.querySelector('.nested-invoker') as HTMLElement;
		const popover = getPopover(dropdown)!;

		await step('open with focus inside', async () => {
			await waitFor(() => expect(invoker.isConnected).toBe(true));
			await userEvent.click(invoker);
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(true));
			(shadow.querySelector('.nested-pick') as HTMLElement).focus();
			expect(deepestFocus()).toBe(shadow.querySelector('.nested-pick'));
		});

		await step('dismissal restores the nested invoker', async () => {
			popover.hidePopover(); // platform-close stand-in (see DismissalRestoresInvoker)
			await waitFor(() => expect(popover.matches(':popover-open')).toBe(false));
			expect(deepestFocus()).toBe(invoker);
		});
	},
};

if (!customElements.get('nested-dropdown-host')) {
	customElements.define(
		'nested-dropdown-host',
		component(
			() =>
				html`<cosmoz-dropdown-next>
					<button class="nested-invoker" slot="button">Nested toggle</button>
					<div class="dropdown-content">
						<button class="nested-pick" autofocus>Item 1</button>
					</div>
				</cosmoz-dropdown-next>`,
		),
	);
}
