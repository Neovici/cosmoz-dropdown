import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/cosmoz-dropdown';

describe('cosmoz-dropdown', () => {
	it('render', async () => {
		const el = await fixture(
			html`<cosmoz-dropdown><a href="#">Test<a/></cosmoz-dropdown>`,
		);
		el.shadowRoot!.querySelector<HTMLButtonElement>('button')!.focus();
		await nextFrame();
		expect(el.shadowRoot!.querySelector('cosmoz-dropdown-content')).to.be.ok;
	});

	it('keeps dropdown content in DOM when closed', async () => {
		const el = await fixture(
			html`<cosmoz-dropdown><a href="#">Test<a/></cosmoz-dropdown>`,
		);
		const button = el.shadowRoot!.querySelector<HTMLButtonElement>('button')!;
		button.focus();
		await nextFrame();

		const content = el.shadowRoot!.querySelector<HTMLElement>(
			'cosmoz-dropdown-content',
		)!;
		// Popover should be open when active/focused
		expect(content.matches(':popover-open')).to.equal(true);

		button.blur();
		await nextFrame();

		// Content should still be the same element (not re-created)
		expect(el.shadowRoot!.querySelector('cosmoz-dropdown-content')).to.equal(
			content,
		);
		// Popover should be closed but content still in DOM
		expect(content.matches(':popover-open')).to.equal(false);
	});

	it('does not intercept Escape from an open dialog', async () => {
		const el = await fixture(html`
			<cosmoz-dropdown>
				<dialog open>Dialog</dialog>
			</cosmoz-dropdown>
		`);
		const button = el.shadowRoot!.querySelector<HTMLButtonElement>('button')!;
		const dialog = el.querySelector('dialog')!;

		button.focus();
		await nextFrame();

		const event = new KeyboardEvent('keydown', {
			key: 'Escape',
			bubbles: true,
			composed: true,
			cancelable: true,
		});
		dialog.dispatchEvent(event);
		await nextFrame();

		expect(event.defaultPrevented).to.equal(false);
		// Dropdown should stay open (popover still showing)
		expect(
			el
				.shadowRoot!.querySelector<HTMLElement>('cosmoz-dropdown-content')!
				.matches(':popover-open'),
		).to.equal(true);
	});

	it('closes dropdown on Escape when not inside dialog', async () => {
		const el = await fixture(
			html`<cosmoz-dropdown><a href="#">Test<a/></cosmoz-dropdown>`,
		);
		const button = el.shadowRoot!.querySelector<HTMLButtonElement>('button')!;

		button.focus();
		await nextFrame();

		const event = new KeyboardEvent('keydown', {
			key: 'Escape',
			bubbles: true,
			composed: true,
			cancelable: true,
		});
		document.dispatchEvent(event);
		await nextFrame();

		expect(event.defaultPrevented).to.equal(true);
		// Dropdown should be closed (popover not showing)
		expect(
			el
				.shadowRoot!.querySelector<HTMLElement>('cosmoz-dropdown-content')!
				.matches(':popover-open'),
		).to.equal(false);
	});
});
