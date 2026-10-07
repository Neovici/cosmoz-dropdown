import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { sendMouse } from '@web/test-runner-commands';
import '../src/next/cosmoz-dropdown-next.js';

const pop = (el: Element): HTMLElement =>
	el.shadowRoot!.querySelector('[popover]') as HTMLElement;

const centered = (el: Element): [number, number] => {
	const r = el.getBoundingClientRect();
	// sendMouse coordinates are viewport-absolute; the fixture element's center
	return [Math.round(r.left + r.width / 2), Math.round(r.top + r.height / 2)];
};

describe('cosmoz-dropdown-next hover mode', () => {
	it('opens on pointer enter, closes after pointer leave (grace)', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-next open-on-hover>
				<button slot="button" class="hoverTrigger">Hover me</button>
				<div class="dropdown-content">
					<div>Item 1</div>
					<div>Item 2</div>
				</div>
			</cosmoz-dropdown-next>
		`);
		const trigger = el.querySelector('.hoverTrigger')!;
		const [x, y] = centered(trigger);

		// move the real pointer onto the trigger
		await sendMouse({ type: 'move', position: [x, y] });
		await nextFrame();
		await new Promise((r) => setTimeout(r, 150));

		expect(pop(el).matches(':popover-open')).to.equal(true);

		// move the pointer away
		await sendMouse({ type: 'move', position: [x, y + 200] });
		// the 100ms grace timer, re-checked below
		await new Promise((r) => setTimeout(r, 250));

		expect(pop(el).matches(':popover-open')).to.equal(false);
	});

	it('moves between trigger and content keep it open (grace re-check)', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown-next open-on-hover>
				<button slot="button" class="hoverTrigger2">Hover me</button>
				<div class="dropdown-content">
					<div class="hoverItem">Item 1</div>
				</div>
			</cosmoz-dropdown-next>
		`);
		const trigger = el.querySelector('.hoverTrigger2')!;
		const item = el.querySelector('.hoverItem')!;
		const [tx, ty] = centered(trigger);

		await sendMouse({ type: 'move', position: [tx, ty] });
		await nextFrame();
		await new Promise((r) => setTimeout(r, 150));
		expect(pop(el).matches(':popover-open')).to.equal(true);

		// pointer moves from the trigger into the content — the grace
		// timer re-checks hover: the popover must stay open
		const [ix, iy] = centered(item);
		await sendMouse({ type: 'move', position: [ix, iy] });
		await new Promise((r) => setTimeout(r, 300));
		expect(pop(el).matches(':popover-open')).to.equal(true);
	});
});
