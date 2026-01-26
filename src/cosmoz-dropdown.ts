import { component, css } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { guard } from 'lit-html/directives/guard.js';
import { useHostFocus, UseFocusOpts } from './use-focus';
import { Content } from './cosmoz-dropdown-content';
import { useFloating, UseFloating } from './use-floating';

const preventDefault = <T extends Event>(e: T) => e.preventDefault();

export interface Props extends UseFocusOpts, UseFloating {
	render: () => unknown;
}

const style = css`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`;

const Dropdown = (host: HTMLElement & Props) => {
	const { placement, strategy, middleware, render } = host;
	const { active, onToggle } = useHostFocus(host);
	const { styles, setReference, setFloating } = useFloating({
		placement,
		strategy,
		middleware,
	});
	return html` <div class="anchor" part="anchor" ${ref(setReference)}>
			<button
				@mousedown=${preventDefault}
				@click=${onToggle}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${when(
			active,
			() =>
				html`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${styleMap(styles)}"
					@connected=${(e: Event) => (e.target as HTMLElement).showPopover?.()}
					${ref(setFloating)}
					><slot></slot>${guard(
						[render],
						() => render?.() || nothing,
					)}</cosmoz-dropdown-content
				> `,
		)}`;
};
customElements.define(
	'cosmoz-dropdown',
	component<Props>(Dropdown, { styleSheets: [style] }),
);
export { Dropdown, Content };
