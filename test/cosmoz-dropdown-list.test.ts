import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../src/cosmoz-dropdown-menu.js';

describe('cosmoz-dropdown-list keyboard', () => {
	let items: HTMLElement[];

	beforeEach(async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-list role="menu">
				<button role="menuitem">One</button>
				<button role="menuitem" disabled>Two</button>
				<button role="menuitem">Three</button>
				<button role="menuitem">Four</button>
			</cosmoz-dropdown-list>
		`);
		items = [...el.querySelectorAll('button')];
	});

	it('arrow down moves to the next enabled item and wraps', async () => {
		items[0].focus();
		await sendKeys({ press: 'ArrowDown' });
		expect(document.activeElement).to.equal(items[2]);
		await sendKeys({ press: 'ArrowDown' });
		await sendKeys({ press: 'ArrowDown' });
		expect(document.activeElement).to.equal(items[0]);
	});

	it('arrow up moves to the previous enabled item and wraps', async () => {
		items[2].focus();
		await sendKeys({ press: 'ArrowUp' });
		expect(document.activeElement).to.equal(items[0]);
		await sendKeys({ press: 'ArrowUp' });
		expect(document.activeElement).to.equal(items[3]);
	});

	it('home and end move to the first and last item', async () => {
		items[2].focus();
		await sendKeys({ press: 'End' });
		expect(document.activeElement).to.equal(items[3]);
		await sendKeys({ press: 'Home' });
		expect(document.activeElement).to.equal(items[0]);
	});
});

// Like cosmoz-button: focus is delegated and `disabled` is a property that isn't reflected
customElements.define(
	'test-button',
	class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open', delegatesFocus: true }).innerHTML =
				'<button><slot></slot></button>';
		}

		get disabled() {
			return this.shadowRoot!.querySelector('button')!.disabled;
		}

		set disabled(value: boolean) {
			this.shadowRoot!.querySelector('button')!.disabled = value;
		}
	},
);

describe('cosmoz-dropdown-list keyboard with unfocusable items', () => {
	it('skips separators and buttons disabled by property', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-list role="menu">
				<test-button role="menuitem">One</test-button>
				<hr />
				<test-button role="menuitem" .disabled=${true}>Two</test-button>
				<test-button role="menuitem">Three</test-button>
			</cosmoz-dropdown-list>
		`);
		const [one, , three] = el.querySelectorAll('test-button');
		one.focus();
		await sendKeys({ press: 'ArrowDown' });
		expect(document.activeElement).to.equal(three);
		await sendKeys({ press: 'ArrowUp' });
		expect(document.activeElement).to.equal(one);
		await sendKeys({ press: 'ArrowUp' });
		expect(document.activeElement).to.equal(three);
	});
});
