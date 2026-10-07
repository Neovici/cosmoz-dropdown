import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useProperty, useRef } from '@pionjs/pion';

export interface DropdownProps {
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

/**
 * Focuses the first `[autofocus]` element among the ref's assigned
 * elements (tracked by the assignedRef directive on the popover's
 * default slot).
 */
const autofocusIn = (content: { current?: Element[] }) => {
	for (const el of content.current ?? []) {
		const autofocusEl = el.matches('[autofocus]')
			? el
			: el.querySelector('[autofocus]');
		if (autofocusEl instanceof HTMLElement) {
			autofocusEl.focus();
			break;
		}
	}
};

/**
 * The dropdown's behavior: owns the opened state, the open/close
 * policies, and the handlers the placement wires up. The component is
 * only props → this hook → render.
 *
 * Auto-open (hover/focus): opens on trigger focus/pointer enter, closes
 * 100ms after pointer leave/focus out (unless hover/focus stayed on the
 * dropdown).
 *
 * Call showPopover/hidePopover synchronously (never in an effect):
 * deferring to a microtask makes light dismiss close the popover again
 * right away.
 *
 * Mutable values read at call time live in the `meta` bag, so every
 * callback is born with stable identity; `closeTimeout` is bag-owned
 * state (the grace timer), written by scheduleClose and kept out of the
 * init so a bag refresh never clobbers a live timer.
 */
export const useCosmozDropdownNext = (host: HTMLElement & DropdownProps) => {
	const {
		placement = 'bottom span-right',
		disabled,
		passthrough,
		openOnHover,
		openOnFocus,
	} = host;
	const popoverRef = useRef<HTMLElement>();
	const [opened, setOpened] = useProperty<boolean>('opened', false);
	const triggers = useRef<Element[]>();
	const content = useRef<Element[]>();

	const meta = useMeta<{
		disabled?: boolean;
		openOnHover?: boolean;
		closeTimeout?: ReturnType<typeof setTimeout>;
	}>({ disabled, openOnHover });

	const findTrigger = useCallback((): HTMLElement | undefined => {
		const t = triggers.current?.[0];
		return t instanceof HTMLElement ? t : undefined;
	}, []);

	const open = useCallback(() => {
		if (meta.disabled) return;
		setOpened(true);
		popoverRef.current?.showPopover?.();
	}, []);

	const close = useCallback(() => {
		setOpened(false);
		popoverRef.current?.hidePopover?.();
	}, []);

	const toggle = useCallback(() => {
		const popover = popoverRef.current;
		if (popover?.matches(':popover-open')) close();
		else open();
	}, []);

	const cancelClose = useCallback(() => {
		clearTimeout(meta.closeTimeout);
	}, []);

	const handleFocusEnter = useCallback((e: Event) => {
		if (meta.disabled) return;
		// focus inside the opened popover (its autofocus) is not an open signal
		if (e.target !== findTrigger()) return;
		cancelClose();
		open();
	}, []);

	const handlePointerEnter = useCallback(() => {
		if (meta.disabled) return;
		cancelClose();
		open();
	}, []);

	const scheduleClose = useCallback(() => {
		clearTimeout(meta.closeTimeout);
		meta.closeTimeout = setTimeout(() => {
			const popover = popoverRef.current;
			if (
				meta.openOnHover &&
				(host.matches(':hover') || popover?.matches(':hover'))
			) {
				return;
			}
			if (host.matches(':focus-within') || popover?.matches(':focus-within')) {
				return;
			}
			close();
		}, 100);
	}, []);

	const onToggle = useCallback((e: ToggleEvent) => {
		const opening = e.newState === 'open';
		setOpened(opening);
		if (opening) {
			autofocusIn(content);
		}
		host.dispatchEvent(
			new ToggleEvent('dropdown-toggle', {
				newState: e.newState,
				oldState: e.oldState,
				composed: true,
			}),
		);
	}, []);

	useEffect(() => {
		const popover = popoverRef.current;
		if (!popover) return;
		if (opened) popover.showPopover?.();
		else popover.hidePopover?.();
	}, [opened]);

	useEffect(() => {
		host.toggleAttribute('opened', !!opened);
	}, [opened]);

	// Auto-open on focus
	useEffect(() => {
		if (!openOnFocus || disabled) return;

		host.addEventListener('focusin', handleFocusEnter);
		host.addEventListener('focusout', scheduleClose);

		return () => {
			host.removeEventListener('focusin', handleFocusEnter);
			host.removeEventListener('focusout', scheduleClose);
		};
	}, [openOnFocus, disabled]);

	useEffect(() => {
		if (!openOnHover || disabled) return;

		host.addEventListener('pointerenter', handlePointerEnter);
		host.addEventListener('pointerleave', scheduleClose);

		return () => {
			host.removeEventListener('pointerenter', handlePointerEnter);
			host.removeEventListener('pointerleave', scheduleClose);
		};
	}, [openOnHover, disabled]);

	// With open-on-focus, only open (not toggle) on click to avoid racing
	// with the focusin handler
	const handleClick = openOnFocus ? open : toggle;

	return {
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
	};
};
