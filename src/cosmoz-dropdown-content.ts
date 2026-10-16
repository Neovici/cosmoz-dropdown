import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { connectable } from './connectable';

const style = css`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		border: 1px solid
			var(--cz-color-border-glass, var(--cz-color-border-primary));
		padding: var(--cz-spacing);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-glass-panel, var(--cz-color-bg-secondary))
		);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			var(--cz-shadow-glass-panel, var(--cz-shadow-lg))
		);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-3xl));
	}
	::slotted(*) {
		display: block;
	}
`;

export const Content = () =>
	html`<div class="wrap" part="wrap"><slot></slot></div>`;

customElements.define(
	'cosmoz-dropdown-content',
	connectable(component(Content, { styleSheets: [style] })),
);
