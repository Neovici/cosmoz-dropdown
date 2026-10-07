import { assignedRef } from '@neovici/cosmoz-utils/directives/assigned-ref';
import { forwardAttributes } from '@neovici/cosmoz-utils/directives/forward-attributes';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import {
	DropdownProps,
	useCosmozDropdownNext,
} from './use-cosmoz-dropdown-next.js';

const style = css`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`;

interface DropdownNextState {
	placement: string;
	disabled?: boolean;
	passthrough?: boolean;
	opened: boolean;
	triggers: { current?: Element[] };
	content: { current?: Element[] };
	popoverRef: { current?: HTMLElement };
	handleClick: () => void;
	onToggle: (e: ToggleEvent) => void;
	close: () => void;
	scheduleClose: () => void;
	cancelClose: () => void;
}

const renderCosmozDropdownNext = ({
	placement,
	disabled,
	passthrough,
	opened,
	triggers,
	content,
	popoverRef,
	handleClick,
	onToggle,
	close,
	scheduleClose,
	cancelClose,
}: DropdownNextState) => {
	return html`
		<slot
			name="button"
			${assignedRef(triggers)}
			${forwardAttributes({
				// passthrough (inline content) leaves the trigger neutral: no
				// popover, no state to state
				'aria-expanded': passthrough ? null : String(opened),
				disabled: disabled && !passthrough ? '' : null,
			})}
			@click=${handleClick}
		></slot>
		${disabled && passthrough
			? html`<slot></slot>`
			: html`<div
					popover
					style="position-area: ${placement}"
					@toggle=${onToggle}
					@select=${close}
					@focusout=${scheduleClose}
					@focusin=${cancelClose}
					${ref((el) => el && (popoverRef.current = el as HTMLElement))}
				>
					<slot ${assignedRef(content)}></slot>
				</div>`}
	`;
};

const CosmozDropdownNext = (host: HTMLElement & DropdownProps) => {
	return renderCosmozDropdownNext(useCosmozDropdownNext(host));
};

customElements.define(
	'cosmoz-dropdown-next',
	component<DropdownProps>(CosmozDropdownNext, {
		styleSheets: [style],
		observedAttributes: [
			'placement',
			'disabled',
			'passthrough',
			'open-on-hover',
			'open-on-focus',
		],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
