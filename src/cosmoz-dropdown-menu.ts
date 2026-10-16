import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { Props as DropdownProps } from './cosmoz-dropdown';

const style = css`
	:host {
		display: block;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96dvh - 64px));
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-glass-panel, var(--cz-color-bg-secondary))
		);
		overflow-y: auto;
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-xl));
		border: 1px solid
			var(
				--cosmoz-dropdown-menu-border-color,
				var(--cz-color-border-glass, var(--cz-color-border-primary))
			);
	}
	:host {
		box-shadow: var(--cz-shadow-glass-panel, var(--cz-shadow-lg));
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-xl));
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
			var(--cz-color-bg-glass-hover, var(--cz-color-bg-secondary-hover))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`;

export const List = () => html` <slot></slot> `;
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
