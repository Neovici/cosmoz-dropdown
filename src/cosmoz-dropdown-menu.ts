import { component, css, useEffect } from '@pionjs/pion';
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

// [first index to try, direction to keep trying in]
const steps: Record<string, (i: number, n: number) => [number, 1 | -1]> = {
	ArrowDown: (i) => [i + 1, 1],
	ArrowUp: (i, n) => [(i < 0 ? n : i) - 1, -1],
	Home: () => [0, 1],
	End: (_, n) => [n - 1, -1],
};

/**
 * Arrow keys, Home and End move focus between the enabled items, wrapping
 * around at the ends. Items that don't take focus, e.g. separators, are skipped.
 */
const onKeyDown = (e: KeyboardEvent) => {
	const step = steps[e.key],
		slot = (e.currentTarget as HTMLElement).shadowRoot?.querySelector('slot');
	if (!step || !slot || e.defaultPrevented) return;
	const items = slot
		.assignedElements({ flatten: true })
		.filter(
			(el): el is HTMLElement =>
				el instanceof HTMLElement && !el.matches('[disabled], [hidden]'),
		);
	const n = items.length;
	if (n === 0) return;
	e.preventDefault();
	const [start, dir] = step(
		items.findIndex((el) => el.matches(':focus-within')),
		n,
	);
	for (let k = 0; k < n; k++) {
		const item = items[(((start + k * dir) % n) + n) % n];
		item.focus();
		if (item.matches(':focus-within')) return;
	}
};

export const List = (host: HTMLElement) => {
	useEffect(() => {
		host.addEventListener('keydown', onKeyDown);
		return () => host.removeEventListener('keydown', onKeyDown);
	}, []);
	return html` <slot></slot> `;
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
