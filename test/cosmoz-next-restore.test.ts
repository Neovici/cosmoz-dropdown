import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../src/next/cosmoz-dropdown-next.js';

const pop = (el: Element): HTMLElement =>
	el.shadowRoot!.querySelector('[popover]') as HTMLElement;

const focused = (): HTMLElement | null => {
	let el = document.activeElement as HTMLElement | null;
	while (el?.shadowRoot) {
		el = el.shadowRoot.activeElement as HTMLElement | null;
	}
	return el;
};

const settle = async () => {
	// the restore waits for the display flip (transitionend) or a cap;
	// settle beyond both
	await new Promise((r) => setTimeout(r, 400));
};

const openFocusedInside = async (el: HTMLElement) => {
	(el as HTMLElement & { opened: boolean }).opened = true;
	await nextFrame();
	// autofocus lands on the pick inside the opened popover
	await new Promise((r) => setTimeout(r, 50));
};

describe('cosmoz-dropdown-next focus restore', () => {
	let el: HTMLElement & { opened: boolean };
	let trigger: HTMLElement;
	let pick: HTMLElement;

	beforeEach(async () => {
		el = await fixture(html`
			<cosmoz-dropdown-next>
				<button slot="button" class="trigger">Toggle</button>
				<div class="dropdown-content">
					<button class="pick" autofocus>Item 1</button>
				</div>
			</cosmoz-dropdown-next>
		`);
		trigger = el.querySelector('.trigger')!;
		pick = el.querySelector('.pick')!;
	});

	describe('dismissal restores the trigger', () => {
		it('after platform close (hidePopover), focus is back on the trigger', async () => {
			await openFocusedInside(el);
			expect(pop(el).matches(':popover-open')).to.equal(true);
			// focus is on the pick (autofocus); now close for real
			pop(el).hidePopover();
			await settle();
			expect(focused()).to.equal(trigger);
		});

		it('after a real Escape (trusted keys), focus is back on the trigger', async () => {
			await openFocusedInside(el);
			await sendKeys({ press: 'Escape' });
			await settle();
			expect(pop(el).matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(trigger);
		});

		it('after select-close, steady state lands on the trigger', async () => {
			await openFocusedInside(el);
			pick.dispatchEvent(new Event('select', { bubbles: true }));
			await settle();
			expect(pop(el).matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(trigger);
		});
	});

	describe('deliberate focus moves are not stolen', () => {
		it('focus moved outside stays after dismissal', async () => {
			await openFocusedInside(el);
			const outside = await fixture(html`<button class="outside">Out</button>`);
			outside.focus();
			await nextFrame();
			await settle(); // the focusout close runs 100ms after the move
			expect(pop(el).matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(outside);
		});
	});

	describe('open-on-focus composition', () => {
		let oel: HTMLElement & { opened: boolean };
		let otrigger: HTMLElement;
		let opop: HTMLElement;

		beforeEach(async () => {
			oel = await fixture(html`
				<cosmoz-dropdown-next open-on-focus>
					<button slot="button" class="otrigger">Toggle</button>
					<div class="dropdown-content">
						<button class="opick" autofocus>Item 1</button>
					</div>
				</cosmoz-dropdown-next>
			`);
			otrigger = oel.querySelector('.otrigger')!;
			opop = pop(oel);
		});

		it('dismissal closes, stays closed, and restores the trigger', async () => {
			otrigger.focus(); // focus trigger (open-on-focus opens)
			await nextFrame();
			expect(opop.matches(':popover-open')).to.equal(true); // open-on-focus opened

			opop.hidePopover();
			await settle();
			expect(opop.matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(otrigger);
		});
	});
});
