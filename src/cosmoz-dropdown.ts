import { component, css, Options } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { guard } from 'lit-html/directives/guard.js';
import { useHostFocus, UseFocusOpts } from './use-focus';
import { Content, define as defineContent } from './cosmoz-dropdown-content';
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
		border: none;
		cursor: pointer;
		position: relative;
		pointer-events: auto;
		outline: none;
		background: var(
			--cosmoz-dropdown-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-dropdown-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: var(--cosmoz-dropdown-button-radius, 50%);
		width: var(
			--cosmoz-dropdown-button-width,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		height: var(
			--cosmoz-dropdown-button-height,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		padding: var(--cosmoz-dropdown-button-padding);
	}
	button:hover {
		background: var(
			--cosmoz-dropdown-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
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

const Dropdown = (contentTag: string) => (host: HTMLElement & Props) => {
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
				html`<${contentTag}
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${styleMap(styles)}"
					@connected=${(e: Event) => (e.target as HTMLElement).showPopover?.()}
					${ref(setFloating)}
					><slot></slot>${guard([render], () => render?.() || nothing)}</${contentTag}>`,
		)}`;
};

export const element = (contentTag: string) => (opts?: Options) =>
	component<Props>(Dropdown(contentTag), { ...opts, styleSheets: [style] });

export const define = (
	name = 'cosmoz-dropdown',
	registry: CustomElementRegistry = window.customElements,
) => {
	const contentTag = `${name}-content`;
	registry.define(name, element(contentTag)());
	defineContent(contentTag);
};

export { Dropdown, Content };
