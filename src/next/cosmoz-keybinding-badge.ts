import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const style = css`
	:host {
		display: inline-flex;
		align-items: center;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
	}
`;

const CosmozKeybindingBadge = () => html`<slot></slot>`;

customElements.define(
	'cosmoz-keybinding-badge',
	component(CosmozKeybindingBadge, { styleSheets: [style] }),
);
