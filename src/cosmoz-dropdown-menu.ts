import { component, css, useEffect, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import { Props as DropdownProps } from './cosmoz-dropdown';

const style = css`
	:host {
		display: block;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96dvh - 64px));
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		overflow-y: auto;
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		border: 1px solid
			var(--cosmoz-dropdown-menu-border-color, var(--cz-color-border-primary));
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, var(--cz-color-text-primary));
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		text-align: left;
		margin: 0;
		width: 100%;
		white-space: nowrap;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cz-color-bg-secondary)
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* Button components own their padding, hover and disabled appearance. */
	::slotted([variant]),
	::slotted([variant]:hover) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	::slotted([variant][disabled]) {
		opacity: 1;
	}
`;

const steps: Record<string, (i: number, n: number) => number> = {
	ArrowDown: (i, n) => (i + 1) % n,
	ArrowUp: (i, n) => (i > 0 ? i : n) - 1,
	Home: () => 0,
	End: (_, n) => n - 1,
};

const isItem = (el: Element): el is HTMLElement =>
	el instanceof HTMLElement && !el.matches('hr, [role="separator"]');

// `disabled` is read as a property too: cosmoz-button doesn't reflect it
const isEnabled = (el: HTMLElement) =>
	!el.hidden &&
	!el.hasAttribute('disabled') &&
	!(el as HTMLButtonElement).disabled;

/**
 * Arrow keys, Home and End move focus between the enabled items, wrapping
 * around at the ends. Separators are skipped. `focus()` focuses the first
 * enabled item.
 */
export const List = (host: HTMLElement) => {
	const items = useRef<HTMLElement[]>([]);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			const step = steps[e.key];
			if (!step || e.defaultPrevented) return;
			const enabled = (items.current ?? []).filter(isEnabled);
			if (enabled.length === 0) return;
			e.preventDefault();
			const path = e.composedPath();
			enabled[
				step(
					enabled.findIndex((el) => path.includes(el)),
					enabled.length,
				)
			].focus();
		};
		host.addEventListener('keydown', onKeyDown);
		// Items can be slotted from further out, where an opening dropdown's
		// [autofocus] search can't reach: `<cosmoz-dropdown-list autofocus>`
		// focuses the first enabled item instead.
		host.focus = (opts?: FocusOptions) =>
			(items.current ?? []).find(isEnabled)?.focus(opts);
		return () => {
			host.removeEventListener('keydown', onKeyDown);
			delete (host as Partial<HTMLElement>).focus;
		};
	}, []);

	return html`<slot
		@slotchange=${(e: Event) =>
			(items.current = (e.target as HTMLSlotElement)
				.assignedElements({ flatten: true })
				.filter(isItem))}
	></slot>`;
};
customElements.define(
	'cosmoz-dropdown-list',
	component(List, { styleSheets: [style] }),
);

type MenuProps = Pick<DropdownProps, 'placement'>;
export const Menu = ({ placement }: MenuProps) =>
	html` <cosmoz-dropdown
		.placement=${placement}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;

customElements.define('cosmoz-dropdown-menu', component<MenuProps>(Menu));
