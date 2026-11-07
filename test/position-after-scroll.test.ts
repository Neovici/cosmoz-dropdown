import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-dropdown';

describe('dropdown placement after page scrolling', () => {
	afterEach(() => window.scrollTo(0, 0));

	it('keeps the fixed popover beside its trigger in viewport coordinates', async () => {
		const wrapper = await fixture<HTMLElement>(html`
			<div style="padding-top: 1500px; padding-bottom: 1500px">
				<cosmoz-dropdown><button>Sample action</button></cosmoz-dropdown>
			</div>
		`);
		const dropdown = wrapper.querySelector('cosmoz-dropdown')!;
		dropdown.scrollIntoView({ block: 'center' });
		expect(window.scrollY).to.be.greaterThan(500);
		const button =
			dropdown.shadowRoot!.querySelector<HTMLButtonElement>('button')!;
		button.click();
		const content = dropdown.shadowRoot!.querySelector<HTMLElement>(
			'cosmoz-dropdown-content',
		)!;
		await waitUntil(
			() => content.matches(':popover-open') && !!content.style.top,
		);
		await waitUntil(
			() =>
				Math.abs(
					content.getBoundingClientRect().top -
						button.getBoundingClientRect().bottom,
				) < 32,
			'The menu must remain beside the trigger after document scrolling',
		);
		expect(content.getBoundingClientRect().bottom).to.be.lessThan(
			window.innerHeight,
		);
	});
});
