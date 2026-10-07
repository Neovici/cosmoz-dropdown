import { assignedRef } from '@neovici/cosmoz-utils/directives/assigned-ref';
import { forwardAttributes } from '@neovici/cosmoz-utils/directives/forward-attributes';
import { component, css, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { useAutoOpen } from './use-auto-open.js';

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

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
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

interface DropdownProps {
	placement?: string;
	opened?: boolean;
	disabled?: boolean;
	/**
	 * @deprecated
	 * Inline-content mode. No known consumer carries it; will be dropped
	 * in a future major unless one shows up.
	 */
	passthrough?: boolean;
	openOnHover?: boolean;
	openOnFocus?: boolean;
}

const CosmozDropdownNext = (host: HTMLElement & DropdownProps) => {
	const {
		placement = 'bottom span-right',
		disabled,
		passthrough,
		openOnHover,
		openOnFocus,
	} = host;
	const popoverRef = useRef<HTMLElement>();
	const {
		triggers,
		opened,
		scheduleClose,
		cancelClose,
		open,
		close,
		toggle,
		onToggle: onToggleHandler,
	} = useAutoOpen({
		host,
		popoverRef,
		disabled,
		openOnHover,
		openOnFocus,
	});

	// With open-on-focus, only open (not toggle) on click to avoid racing
	// with the focusin handler
	const handleClick = openOnFocus ? open : toggle;

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
					@toggle=${onToggleHandler}
					@select=${close}
					@focusout=${scheduleClose}
					@focusin=${cancelClose}
					${ref((el) => el && (popoverRef.current = el as HTMLElement))}
				>
					<slot></slot>
				</div>`}
	`;
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
