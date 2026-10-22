import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../src/next/cosmoz-dropdown-next.js';

class NestedTrigger extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open', delegatesFocus: true }).innerHTML =
			'<div id="btn" role="button" tabindex="0">Go</div>';
	}
}
customElements.define('nested-trigger', NestedTrigger);

class NestedListbox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({
			mode: 'open',
		}).innerHTML =
			'<slot name="search"></slot><div class="items" tabindex="-1"><slot name="items"></slot></div>';
	}
}
customElements.define('nested-listbox', NestedListbox);

class NestedSearch extends HTMLElement {
	constructor() {
		super();
		// the positioned wrapper keeps the inner input's offsetParent
		// non-null through the whole hide transition, like cosmoz-input
		this.attachShadow({ mode: 'open' }).innerHTML =
			'<div style="position: relative"><input id="input" aria-label="Search" /></div>';
	}
}
customElements.define('nested-search', NestedSearch);

const pop = (el: Element): HTMLElement =>
	el.shadowRoot!.querySelector('[popover]') as HTMLElement;

const focused = (): HTMLElement | null => {
	let el = document.activeElement as HTMLElement | null;
	while (el?.shadowRoot) {
		el = el.shadowRoot.activeElement as HTMLElement | null;
	}
	return el;
};

// the post-hide restore lands asynchronously (see restoreFocus); give
// it a beat before asserting
const settledFocus = async (target: HTMLElement) => {
	for (let i = 0; i < 15; i++) {
		if (focused()?.outerHTML === target.outerHTML) return;
		await new Promise((r) => setTimeout(r, 20));
	}
};

const settled = (el: HTMLElement, state: 'open' | 'closed') =>
	new Promise<void>((resolve) =>
		pop(el).addEventListener(
			'toggle',
			(e) => (e as ToggleEvent).newState === state && resolve(),
			{ once: true },
		),
	);

const openFocusedInside = async (el: HTMLElement) => {
	const opened = settled(el, 'open');
	(el as HTMLElement & { opened: boolean }).opened = true;
	await opened;
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
			const closed = settled(el, 'closed');
			pop(el).hidePopover();
			await closed;
			expect(focused()).to.equal(trigger);
		});

		it('after a real Escape (trusted keys), focus is back on the trigger', async () => {
			await openFocusedInside(el);
			const closed = settled(el, 'closed');
			await sendKeys({ press: 'Escape' });
			await closed;
			expect(pop(el).matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(trigger);
		});

		it('after select-close, steady state lands on the trigger', async () => {
			await openFocusedInside(el);
			const closed = settled(el, 'closed');
			pick.dispatchEvent(new Event('select', { bubbles: true }));
			await closed;
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
			// the focusout close runs 100ms after the move; the toggle
			// event is the deterministic signal
			await settled(el, 'closed');
			expect(pop(el).matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(outside);
		});
	});

	describe('dismissal restores through nested shadow content', () => {
		// mirrors cosmoz-autocomplete #285: a slotted trigger hosting the
		// field in its own shadow, a search input nested two shadow levels
		// into the dismissal content
		let nel: HTMLElement & { opened: boolean };
		let focusTarget: HTMLElement;
		let search: HTMLElement;
		let npick: HTMLElement;

		beforeEach(async () => {
			nel = await fixture(html`
				<cosmoz-dropdown-next>
					<nested-trigger slot="button" class="trigger"></nested-trigger>
					<div class="dropdown-content">
						<nested-listbox>
							<nested-search slot="search"></nested-search>
							<button class="npick" autofocus slot="items">Item 1</button>
						</nested-listbox>
					</div>
				</cosmoz-dropdown-next>
			`);
			focusTarget = nel
				.querySelector('.trigger')!
				.shadowRoot!.querySelector('#btn')!;
			search = nel
				.querySelector('nested-listbox')!
				.querySelector('nested-search')!
				.shadowRoot!.querySelector('#input')!;
			npick = nel.querySelector('.npick')!;
		});

		it('after platform close, focus is back on the trigger', async () => {
			await openFocusedInside(nel);
			await nextFrame();
			search.focus();
			await nextFrame();
			const closed = settled(nel, 'closed');
			pop(nel).hidePopover();
			await closed;
			await settledFocus(focusTarget);
			expect(focused()?.outerHTML).to.equal(focusTarget.outerHTML);
		});

		it('after a real Escape (trusted keys), focus is back on the trigger', async () => {
			await openFocusedInside(nel);
			await nextFrame();
			search.focus();
			await nextFrame();
			const closed = settled(nel, 'closed');
			await sendKeys({ press: 'Escape' });
			await closed;
			await settledFocus(focusTarget);
			expect(focused()?.outerHTML).to.equal(focusTarget.outerHTML);
		});

		it('after select-close, focus is back on the trigger', async () => {
			await openFocusedInside(nel);
			await nextFrame();
			const closed = settled(nel, 'closed');
			npick.dispatchEvent(
				new Event('select', { bubbles: true, composed: true }),
			);
			await closed;
			await nextFrame();
			await settledFocus(focusTarget);
			expect(focused()?.outerHTML).to.equal(focusTarget.outerHTML);
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

			const closed = settled(oel, 'closed');
			opop.hidePopover();
			await closed;
			expect(opop.matches(':popover-open')).to.equal(false);
			expect(focused()).to.equal(otrigger);
		});
	});
});
