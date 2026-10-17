import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { resetMouse, sendMouse } from '@web/test-runner-commands';
import '../src/cosmoz-dropdown';

const controlOf = (dropdown: HTMLElement) =>
	dropdown.shadowRoot!
		.querySelector('cosmoz-button')!
		.shadowRoot!.querySelector('button')!;

describe('dropdown trigger sizing', () => {
	afterEach(() => resetMouse());

	it('fills a percentage-sized field trigger and opens its inputs', async () => {
		const root = await fixture<HTMLElement>(html`
			<div style="width: 200px">
				<style>
					.sized::part(button) {
						width: 100%;
						height: 100%;
						display: flex;
					}
				</style>
				<cosmoz-dropdown class="sized">
					<div slot="button" style="width: 100%; height: 40px; position: relative">
						<span style="position: absolute">Campaign rebate %</span>
					</div>
					<label>From <input /></label>
					<label>To <input /></label>
				</cosmoz-dropdown>
			</div>
		`);
		const dropdown = root.querySelector<HTMLElement>('cosmoz-dropdown')!;
		await waitUntil(() => dropdown.tabIndex === 0);
		const bounds = controlOf(dropdown).getBoundingClientRect();
		expect(bounds.width).to.be.closeTo(200, 0.5);
		expect(bounds.height).to.be.closeTo(40, 0.5);
		await sendMouse({
			type: 'click',
			position: [
				Math.round(bounds.x + bounds.width / 2),
				Math.round(bounds.y + bounds.height / 2),
			],
		});
		await waitUntil(() =>
			dropdown.shadowRoot!
				.querySelector('cosmoz-dropdown-content')!
				.matches(':popover-open'),
		);
		for (const input of dropdown.querySelectorAll('input')) {
			expect(input.getBoundingClientRect().width).to.be.greaterThan(0);
			expect(getComputedStyle(input).visibility).to.equal('visible');
		}
	});

	it('keeps an unstyled text trigger at its intrinsic width', async () => {
		const root = await fixture<HTMLElement>(html`
			<div style="width: 240px">
				<cosmoz-dropdown>
					<span slot="button">Choose</span>
					<div>Details</div>
				</cosmoz-dropdown>
			</div>
		`);
		const dropdown = root.querySelector<HTMLElement>('cosmoz-dropdown')!;
		const label = dropdown.querySelector('span')!;
		expect(controlOf(dropdown).getBoundingClientRect().width).to.be.closeTo(
			label.getBoundingClientRect().width,
			0.5,
		);
	});

	it('preserves an explicitly sized icon trigger', async () => {
		const root = await fixture<HTMLElement>(html`
			<div style="width: 240px">
				<style>
					.icon::part(button) { width: 32px; height: 32px; }
				</style>
				<cosmoz-dropdown class="icon">
					<svg slot="button" width="16" height="16"></svg>
					<div>Details</div>
				</cosmoz-dropdown>
			</div>
		`);
		const dropdown = root.querySelector<HTMLElement>('cosmoz-dropdown')!;
		const bounds = controlOf(dropdown).getBoundingClientRect();
		expect(bounds.width).to.equal(32);
		expect(bounds.height).to.equal(32);
		expect(bounds.x).to.equal(root.getBoundingClientRect().x);
	});
});
