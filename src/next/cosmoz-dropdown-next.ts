import { component, css, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';

const style = css`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: 0;
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
	}
`;

interface DropdownProps {
	placement?: string;
}

const CosmozDropdownNext = ({
	placement = 'bottom span-right',
}: DropdownProps) => {
	const popover = useRef<HTMLElement>();

	const toggle = () => {
		popover.current?.togglePopover();
	};

	return html`
		<slot name="button" @click=${toggle}></slot>
		<div
			popover
			style="position-area: ${placement}"
			${ref((el) => {
				popover.current = el as HTMLElement | undefined;
			})}
		>
			<slot></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-next',
	component<DropdownProps>(CosmozDropdownNext, {
		styleSheets: [style],
		observedAttributes: ['placement'],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
