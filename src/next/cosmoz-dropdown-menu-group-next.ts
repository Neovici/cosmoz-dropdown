import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

const style = css`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none;
	}

	/* Add separator before groups (except first visible) */
	:host(:not(:first-child):not([hidden])) {
		border-top: 1px solid var(--cz-color-border-secondary, #eaecf0);
		margin-top: calc(var(--cz-spacing, 0.25rem) * 2);
		padding-top: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	.label {
		display: block;
		padding: calc(var(--cz-spacing, 0.25rem) * 1)
			calc(var(--cz-spacing, 0.25rem) * 3);
		font-size: var(--cz-text-xs, 0.75rem);
		line-height: var(--cz-text-xs-line-height, 1.5);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(--cz-color-text-tertiary, #475467);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.items {
		display: flex;
		flex-direction: column;
	}
`;

interface MenuGroupProps {
	label?: string;
}

const CosmozDropdownMenuGroupNext = ({ label }: MenuGroupProps) => {
	return html`
		${label ? html`<div class="label">${label}</div>` : nothing}
		<div class="items" role="group" aria-label=${label || nothing}>
			<slot></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-menu-group-next',
	component<MenuGroupProps>(CosmozDropdownMenuGroupNext, {
		styleSheets: [normalize, style],
		observedAttributes: ['label'],
		shadowRootInit: { mode: 'open' },
	}),
);
