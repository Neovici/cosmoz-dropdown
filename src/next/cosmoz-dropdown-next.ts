import {
	component,
	css,
	useCallback,
	useEffect,
	useRef,
	useState,
} from '@pionjs/pion';
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
	const [popoverEl, setPopoverEl] = useState<HTMLElement>();
	const autoOpenState = useRef<{
		hoveringHost: boolean;
		hoveringPopover: boolean;
		focusedHost: boolean;
		closeTimeout?: ReturnType<typeof setTimeout>;
	}>({ hoveringHost: false, hoveringPopover: false, focusedHost: false });

	// Only update state when the element actually changes
	const popoverRef = useCallback(
		(el: Element | undefined) => {
			const htmlEl = el as HTMLElement | undefined;
			if (htmlEl !== popoverEl) {
				setPopoverEl(htmlEl);
			}
		},
		[popoverEl],
	);

	const open = () => {
		popoverEl?.showPopover();
	};

	const close = () => {
		popoverEl?.hidePopover();
	};

	const toggle = () => {
		popoverEl?.togglePopover();
	};

	// Auto-open on hover and/or focus when enabled
	useEffect(() => {
		if ((!openOnHover && !openOnFocus) || !popoverEl) return;

		const state = autoOpenState.current;

		const scheduleClose = () => {
			state.closeTimeout = setTimeout(() => {
				if (
					!state.hoveringHost &&
					!state.hoveringPopover &&
					!state.focusedHost
				) {
					close();
				}
			}, 100);
		};

		const handleHostEnter = () => {
			clearTimeout(state.closeTimeout);
			state.hoveringHost = true;
			open();
		};

		const handleHostLeave = () => {
			state.hoveringHost = false;
			scheduleClose();
		};

		const handleFocusIn = () => {
			clearTimeout(state.closeTimeout);
			state.focusedHost = true;
			open();
		};

		const handleFocusOut = () => {
			state.focusedHost = false;
			scheduleClose();
		};

		const handlePopoverEnter = () => {
			clearTimeout(state.closeTimeout);
			state.hoveringPopover = true;
		};

		const handlePopoverLeave = () => {
			state.hoveringPopover = false;
			scheduleClose();
		};

		const handleToggle = (e: ToggleEvent) => {
			const pop = e.target as HTMLElement;
			if (e.newState === 'open') {
				pop.addEventListener('pointerenter', handlePopoverEnter);
				pop.addEventListener('pointerleave', handlePopoverLeave);
			} else {
				pop.removeEventListener('pointerenter', handlePopoverEnter);
				pop.removeEventListener('pointerleave', handlePopoverLeave);
				state.hoveringPopover = false;
			}
		};

		if (openOnHover) {
			host.addEventListener('pointerenter', handleHostEnter);
			host.addEventListener('pointerleave', handleHostLeave);
			popoverEl.addEventListener('toggle', handleToggle as EventListener);
		}

		if (openOnFocus) {
			host.addEventListener('focusin', handleFocusIn);
			host.addEventListener('focusout', handleFocusOut);
		}

		return () => {
			clearTimeout(state.closeTimeout);
			if (openOnHover) {
				host.removeEventListener('pointerenter', handleHostEnter);
				host.removeEventListener('pointerleave', handleHostLeave);
				popoverEl.removeEventListener('toggle', handleToggle as EventListener);
			}
			if (openOnFocus) {
				host.removeEventListener('focusin', handleFocusIn);
				host.removeEventListener('focusout', handleFocusOut);
			}
		};
	}, [openOnHover, openOnFocus, host, popoverEl]);

	return html`
		<slot name="button" @click=${toggle}></slot>
		<div
			popover
			style="position-area: ${placement}"
			@toggle=${autofocus}
			@select=${close}
			${ref(popoverRef)}
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
