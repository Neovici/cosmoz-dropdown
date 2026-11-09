import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-dropdown-menu';

describe('menu radius roles', () => {
	it('inherits separate card and compact roles with separate overrides', async () => {
		const scope = await fixture<HTMLElement>(html`
			<div style="--cz-radius-card:18px;--cz-radius-compact:9px">
				<cosmoz-dropdown-list><button>Open</button></cosmoz-dropdown-list>
			</div>
		`);
		const menu = scope.querySelector<HTMLElement>('cosmoz-dropdown-list')!;
		const item = menu.querySelector('button')!;
		expect(getComputedStyle(menu).borderRadius).to.equal('18px');
		expect(getComputedStyle(item).borderRadius).to.equal('9px');
		scope.style.setProperty('--cz-radius-card', '20px');
		expect(getComputedStyle(menu).borderRadius).to.equal('20px');
		menu.style.setProperty('--cosmoz-dropdown-border-radius', '5px');
		expect(getComputedStyle(menu).borderRadius).to.equal('5px');
		expect(getComputedStyle(item).borderRadius).to.equal('9px');
		menu.style.setProperty('--cosmoz-dropdown-item-border-radius', '3px');
		expect(getComputedStyle(item).borderRadius).to.equal('3px');
	});
});
