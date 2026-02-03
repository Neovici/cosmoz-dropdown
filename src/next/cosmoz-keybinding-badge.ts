import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const style = css`
	:host {
		display: inline-flex;
		align-items: center;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
		background: var(--cz-color-bg-tertiary, #f2f4f7);
		padding: calc(var(--cz-spacing, 0.25rem) / 2)
			calc(var(--cz-spacing, 0.25rem) * 1.5);
		border-radius: var(--cz-radius-sm, 0.375rem);
	}
`;

const CosmozKeybindingBadge = () => html`<slot></slot>`;

customElements.define(
	'cosmoz-keybinding-badge',
	component(CosmozKeybindingBadge, { styleSheets: [normalize, style] }),
);
