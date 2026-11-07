import { expect, fixture, html } from '@open-wc/testing';
import { sendMouse } from '@web/test-runner-commands';
import '../src/next/cosmoz-dropdown-next.js';

class LabelledTrigger extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open', delegatesFocus: true });
	}
}
customElements.define('test-labelled-trigger', LabelledTrigger);

const click = async (element: Element) => {
	const box = element.getBoundingClientRect();
	await sendMouse({
		type: 'click',
		position: [
			Math.round(box.x + box.width / 2),
			Math.round(box.y + box.height / 2),
		],
	});
};

describe('labelled dropdown triggers', () => {
	for (const openOnFocus of [false, true]) {
		for (const wrapping of [false, true]) {
			it(`toggles once per ${wrapping ? 'wrapping' : 'associated'} label click with openOnFocus=${openOnFocus}`, async () => {
				const dropdown = await fixture<HTMLElement>(html`
					<cosmoz-dropdown-next ?open-on-focus=${openOnFocus}>
						<test-labelled-trigger slot="button"></test-labelled-trigger>
						<div>Options</div>
					</cosmoz-dropdown-next>
				`);
				const trigger = dropdown.querySelector('test-labelled-trigger')!;
				trigger.shadowRoot!.innerHTML = wrapping
					? '<label><span>Warehouse</span><input /></label>'
					: '<label for="warehouse"><span>Warehouse</span></label><input id="warehouse" />';
				const label = trigger.shadowRoot!.querySelector('span')!;
				const input = trigger.shadowRoot!.querySelector('input')!;
				const popover = dropdown.shadowRoot!.querySelector('[popover]')!;

				await click(label);
				expect(popover.matches(':popover-open')).to.equal(true);
				await click(label);
				expect(popover.matches(':popover-open')).to.equal(false);
				await click(input);
				expect(popover.matches(':popover-open')).to.equal(true);
			});
		}
	}
});
