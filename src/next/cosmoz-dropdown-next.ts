import { component, css, useEffect, useRef } from '@pionjs/pion';
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

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`;

interface DropdownProps {
	placement?: string;
	openOnHover?: boolean;
	openOnFocus?: boolean;
}

const CosmozDropdownNext = (host: HTMLElement & DropdownProps) => {
	const { placement = 'bottom span-right', openOnHover, openOnFocus } = host;
	const popoverRef = useRef<HTMLElement>();
	const closeTimeout = useRef<ReturnType<typeof setTimeout>>();

	const open = () => popoverRef.current?.showPopover();
	const close = () => popoverRef.current?.hidePopover();
	const toggle = () => popoverRef.current?.togglePopover();

	const cancelClose = () => clearTimeout(closeTimeout.current);

	const scheduleClose = () => {
		clearTimeout(closeTimeout.current);
		closeTimeout.current = setTimeout(() => {
			const popover = popoverRef.current;
			if (host.matches(':hover') || popover?.matches(':hover')) return;
			if (host.matches(':focus-within') || popover?.matches(':focus-within')) {
				return;
			}
			close();
		}, 100);
	};

	const handleToggle = (e: ToggleEvent) => {
		autofocus(e);

		if (!openOnHover) return;

		const pop = e.target as HTMLElement;
		if (e.newState === 'open') {
			pop.addEventListener('pointerenter', cancelClose);
			pop.addEventListener('pointerleave', scheduleClose);
		} else {
			pop.removeEventListener('pointerenter', cancelClose);
			pop.removeEventListener('pointerleave', scheduleClose);
		}
	};

	// Auto-open on hover and/or focus when enabled
	useEffect(() => {
		if (!openOnHover && !openOnFocus) return;

		const handleEnter = () => {
			cancelClose();
			open();
		};

		if (openOnHover) {
			host.addEventListener('pointerenter', handleEnter);
			host.addEventListener('pointerleave', scheduleClose);
		}

		if (openOnFocus) {
			host.addEventListener('focusin', handleEnter);
			host.addEventListener('focusout', scheduleClose);
		}

		return () => {
			cancelClose();
			if (openOnHover) {
				host.removeEventListener('pointerenter', handleEnter);
				host.removeEventListener('pointerleave', scheduleClose);
			}
			if (openOnFocus) {
				host.removeEventListener('focusin', handleEnter);
				host.removeEventListener('focusout', scheduleClose);
			}
		};
	}, [openOnHover, openOnFocus, host]);

	return html`
		<slot name="button" @click=${toggle}></slot>
		<div
			popover
			style="position-area: ${placement}"
			@toggle=${handleToggle}
			@select=${close}
			${ref((el) => el && (popoverRef.current = el as HTMLElement))}
		>
			<slot></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-next',
	component<DropdownProps>(CosmozDropdownNext, {
		styleSheets: [style],
		observedAttributes: ['placement', 'open-on-hover', 'open-on-focus'],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
