import { component, css, useEffect, useHost, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';

/**
 * Autofocus polyfill for slotted content.
 *
 * The HTML spec's autofocus delegate algorithm uses DOM tree traversal,
 * not flat tree, so it doesn't find [autofocus] elements slotted into
 * a popover/dialog. This is a known spec limitation being discussed at:
 * https://github.com/whatwg/html/issues/9245
 *
 * This handler searches slotted content for [autofocus] and focuses it
 * when the popover opens. Can be removed once browsers implement the
 * spec fix (flat tree traversal for dialog/popover focus delegate).
 */
const autofocus = (e: ToggleEvent) => {
	if (e.newState !== 'open') return;

	const popover = e.target as HTMLElement;
	const slot = popover.querySelector(
		'slot:not([name])',
	) as HTMLSlotElement | null;
	const elements = slot?.assignedElements({ flatten: true }) ?? [];
	for (const el of elements) {
		const autofocusEl = el.matches('[autofocus]')
			? el
			: el.querySelector('[autofocus]');
		if (autofocusEl instanceof HTMLElement) {
			autofocusEl.focus();
			break;
		}
	}
};

const style = css`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;

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
`;

interface DropdownProps {
	placement?: string;
	hover?: boolean;
}

const CosmozDropdownNext = ({
	placement = 'bottom span-right',
	hover = false,
}: DropdownProps) => {
	const host = useHost();
	const popover = useRef<HTMLElement>();

	const open = () => {
		popover.current?.showPopover();
	};

	const close = () => {
		popover.current?.hidePopover();
	};

	const toggle = () => {
		popover.current?.togglePopover();
	};

	// Hover mode: open on pointer enter, close on pointer leave
	useEffect(() => {
		if (!hover) return;

		let closeTimeout: ReturnType<typeof setTimeout>;

		const handleEnter = () => {
			clearTimeout(closeTimeout);
			open();
		};

		const handleLeave = () => {
			// Small delay before closing to allow moving between trigger and popover
			closeTimeout = setTimeout(close, 100);
		};

		host.addEventListener('pointerenter', handleEnter);
		host.addEventListener('pointerleave', handleLeave);

		const pop = popover.current;
		pop?.addEventListener('pointerenter', handleEnter);
		pop?.addEventListener('pointerleave', handleLeave);

		return () => {
			clearTimeout(closeTimeout);
			host.removeEventListener('pointerenter', handleEnter);
			host.removeEventListener('pointerleave', handleLeave);
			pop?.removeEventListener('pointerenter', handleEnter);
			pop?.removeEventListener('pointerleave', handleLeave);
		};
	}, [hover, host]);

	return html`
		<slot name="button" @click=${toggle}></slot>
		<div
			popover
			style="position-area: ${placement}"
			@toggle=${autofocus}
			@select=${close}
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
		observedAttributes: ['placement', 'hover'],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
