import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const style = css`
	:host {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}
`;

const CosmozMenuLabel = () => html`<slot></slot>`;

customElements.define(
	'cosmoz-menu-label',
	component(CosmozMenuLabel, { styleSheets: [style] }),
);
