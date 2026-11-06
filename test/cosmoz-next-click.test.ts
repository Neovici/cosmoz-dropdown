import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import '../src/next/cosmoz-dropdown-next.js';

const pop = (el: Element): HTMLElement =>
	el.shadowRoot!.querySelector('[popover]') as HTMLElement;

const isOpen = (el: Element) => pop(el).matches(':popover-open');

const centered = (el: Element): [number, number] => {
	const r = el.getBoundingClientRect();
	return [Math.round(r.left + r.width / 2), Math.round(r.top + r.height / 2)];
};

const settle = () => new Promise((r) => setTimeout(r, 50));

const click = async (el: Element) => {
	await sendMouse({ type: 'click', position: centered(el) });
	await settle();
};

describe('cosmoz-dropdown-next click', () => {
	afterEach(() => sendMouse({ type: 'move', position: [0, 0] }));

	for (const openOnFocus of [false, true]) {

		describe(openOnFocus ? 'with open-on-focus' : 'default', () => {
			let el: HTMLElement;
			let trigger: HTMLElement;

			beforeEach(async () => {
				el = await fixture(html`
					<cosmoz-dropdown-next ?open-on-focus=${openOnFocus}>
						<button slot="button" class="trigger">Toggle</button>
						<div class="dropdown-content"><div>Item 1</div></div>
					</cosmoz-dropdown-next>
				`);
				trigger = el.querySelector('.trigger')!;
			});

			it('opens on click and closes on a second click', async () => {
				await click(trigger);
				expect(isOpen(el)).to.equal(true);

				await click(trigger);
				expect(isOpen(el)).to.equal(false);

				await click(trigger);
				expect(isOpen(el)).to.equal(true);
			});

			it('toggles with the keyboard', async () => {
				trigger.focus();
				await settle();
				if (!openOnFocus) {
					await sendKeys({ press: 'Enter' });
					await settle();
				}
				expect(isOpen(el)).to.equal(true);

				await sendKeys({ press: 'Enter' });
				await settle();
				expect(isOpen(el)).to.equal(false);
			});
		});
	}

	it('stays open when the trigger is clicked in hover mode', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-next open-on-hover>
				<button slot="button" class="trigger">Hover me</button>
				<div class="dropdown-content"><div>Item 1</div></div>
			</cosmoz-dropdown-next>
		`);
		const trigger = el.querySelector('.trigger')!;
		await sendMouse({ type: 'move', position: centered(trigger) });
		await settle();
		expect(isOpen(el)).to.equal(true);

		await click(trigger);
		expect(isOpen(el)).to.equal(true);
	});

	it('toggles with the keyboard in hover mode', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-next open-on-hover>
				<button slot="button" class="trigger">Hover me</button>
				<div class="dropdown-content"><div>Item 1</div></div>
			</cosmoz-dropdown-next>
		`);
		el.querySelector<HTMLElement>('.trigger')!.focus();
		await sendKeys({ press: 'Enter' });
		await settle();
		expect(isOpen(el)).to.equal(true);

		await sendKeys({ press: 'Enter' });
		await settle();
		expect(isOpen(el)).to.equal(false);
	});
});
