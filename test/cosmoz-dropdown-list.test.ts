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
