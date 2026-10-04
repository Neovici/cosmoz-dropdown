import {
	component,
	css,
	useCallback,
	useEffect,
	useProperty,
	useRef,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { useAutoOpen } from './use-auto-open.js';

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

const activeElement = (root: DocumentOrShadowRoot = document) => {
	let el = root.activeElement as HTMLElement | null;
	while (el?.shadowRoot) {
		el = el.shadowRoot.activeElement as HTMLElement | null;
	}
	return el;
};

/**
 * The slotted invoker (the button-slot content) is the dropdown's face:
 * its `aria-expanded` is reconciled to the popover's own `toggle` event,
 * whatever closed it - the API, light dismiss, Escape, back, or a
 * `select` from inside the content. No invoker, nothing to reconcile.
 *
 * A manual popover moves no focus when it hides. Where focus lands
 * decides the restore: if it went to something real - the thing
 * focused, the picked row, whatever took it on purpose - it stays;
 * only lost focus (nobody has it: body, or nothing) is handed back to
 * the invoker.
 */
const reconcileInvoker = (host: HTMLElement, open: boolean) => {
	const slot =
		host.shadowRoot?.querySelector<HTMLSlotElement>('slot[name=button]');
	const invoker = slot?.assignedElements({ flatten: true })[0];
	if (!invoker || !(invoker instanceof HTMLElement)) {
		return;
	}
	invoker.setAttribute('aria-expanded', String(open));
	if (open) {
		return;
	}
	// focus may sit on the host itself (a forwarded click() focuses the
	// invoker's target), in the popover's slotted content - light DOM,
	// which `shadowRoot.contains` does not see (`host.contains` does) -
	// or nowhere. At toggle-time the display flip may not have finished
	// with focus: the platform's own fixup is a queued task too, and a
	// read taken before it sees focus that is about to be lost. Wait the
	// flip out, then hand lost focus to the invoker. Timers, not
	// animation frames: rAF never fires in an idle headless runner. The
	// second pass re-checks in case focus settled between the two.
	const restore = () => {
		const focused = activeElement();
		if (focused == null || focused === document.body) {
			invoker.focus();
		}
	};
	setTimeout(restore, 50);
	setTimeout(restore, 250);
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
	const [opened, setOpened] = useProperty<boolean>('opened', false);

	// Call showPopover/hidePopover synchronously so the browser associates
	// the popover with the current user-gesture. Deferring to a microtask
	// (useEffect) causes light-dismiss to immediately close the popover.
	const open = useCallback(() => {
		if (disabled) return;
		setOpened(true);
		popoverRef.current?.showPopover?.();
	}, [disabled]);
	const close = useCallback(() => {
		setOpened(false);
		popoverRef.current?.hidePopover?.();
	}, []);
	const toggle = useCallback(() => {
		if (disabled) return;
		const popover = popoverRef.current;
		if (popover?.matches(':popover-open')) close();
		else open();
	}, [disabled]);

	// Sync native popover when `opened` is set externally via property binding
	useEffect(() => {
		const popover = popoverRef.current;
		if (!popover) return;
		if (opened) popover.showPopover?.();
		else popover.hidePopover?.();
	}, [opened]);

	useEffect(() => {
		host.toggleAttribute('opened', !!opened);
	}, [opened]);

	const { scheduleClose, cancelClose } = useAutoOpen({
		host,
		popoverRef,
		disabled,
		openOnHover,
		openOnFocus,
		open,
		close,
	});

	// With open-on-focus, only open (not toggle) on click to avoid racing
	// with the focusin handler
	const handleClick = openOnFocus ? open : toggle;

	// the invoker's face is ours from the start: state it before the
	// first toggle can
	useEffect(() => {
		reconcileInvoker(host, false);
	}, []);

	const onToggle = useCallback((e: ToggleEvent) => {
		autofocus(e);
		const open = e.newState === 'open';
		setOpened(open);
		reconcileInvoker(host, open);
		host.dispatchEvent(
			new ToggleEvent('dropdown-toggle', {
				newState: e.newState,
				oldState: e.oldState,
				composed: true,
			}),
		);
	}, []);

	return html`
		<slot name="button" @click=${handleClick}></slot>
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
