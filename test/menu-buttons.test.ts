import '@neovici/cosmoz-button';
import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-dropdown-menu';

describe('menu button layout', () => {
	it('lets buttons fill equally aligned rows without extra padding', async () => {
		const list = await fixture(html`
			<cosmoz-dropdown-list
				style="width: 240px; --cz-spacing: 4px; --cz-control-height-sm: 28px"
			>
				<cosmoz-button variant="tertiary" size="sm">Short</cosmoz-button>
				<cosmoz-button variant="tertiary" size="sm">
					A longer sample action
				</cosmoz-button>
			</cosmoz-dropdown-list>
		`);
		const buttons = [...list.querySelectorAll('cosmoz-button')];
		const bounds = buttons.map((host) => {
			const control = host.shadowRoot!.querySelector<HTMLElement>('.button')!;
			expect(getComputedStyle(host).padding).to.equal('0px');
			expect(getComputedStyle(control).justifyContent).to.equal('flex-start');
			expect(control.getBoundingClientRect().width).to.be.closeTo(
				host.getBoundingClientRect().width,
				0.5,
			);
			return control.getBoundingClientRect();
		});
		expect(bounds[0].left).to.equal(bounds[1].left);
		expect(bounds[0].width).to.equal(bounds[1].width);
		expect(bounds[0].bottom).to.equal(bounds[1].top);
	});
});
