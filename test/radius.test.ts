import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-dropdown-menu';

describe('menu radius roles', () => {
	it('inherits separate surface and item roles and retains the public override', async () => {
		const scope = await fixture<HTMLElement>(html`
			<div style="--cz-radius-surface:18px;--cz-radius-item:9px">
				<cosmoz-dropdown-list><button>Open</button></cosmoz-dropdown-list>
			</div>
		`);
		const menu = scope.querySelector<HTMLElement>('cosmoz-dropdown-list')!;
		const item = menu.querySelector('button')!;
		expect(getComputedStyle(menu).borderRadius).to.equal('18px');
		expect(getComputedStyle(item).borderRadius).to.equal('9px');
		scope.style.setProperty('--cz-radius-surface', '20px');
		expect(getComputedStyle(menu).borderRadius).to.equal('20px');
		menu.style.setProperty('--cosmoz-dropdown-border-radius', '5px');
		expect(getComputedStyle(menu).borderRadius).to.equal('5px');
		expect(getComputedStyle(item).borderRadius).to.equal('5px');
	});
});
