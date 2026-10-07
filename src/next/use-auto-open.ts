import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useProperty, useRef } from '@pionjs/pion';

interface UseAutoOpenOptions {
	host: HTMLElement;
	popoverRef: { current?: HTMLElement };
	disabled?: boolean;
	openOnHover?: boolean;
	openOnFocus?: boolean;
}

/**
 * Auto-open (hover/focus): opens on trigger focus/pointer enter, closes
 * 100ms after pointer leave/focus out (unless hover/focus stayed on the
 * dropdown).
 *
 * Owns the open/close plumbing: `open`, `close`, `toggle`, and the
 * popover `toggle` handler (`onToggle` — autofocus + focus restore +
 * `dropdown-toggle` dispatch).
 *
 * Restoring focus to the trigger after a close looks like an open intent
 * to this policy: the restore lifts the focusin listener around the focus
 * call, so it is not an open signal.
 *
 * Call showPopover/hidePopover synchronously (never in an effect):
 * deferring to a microtask makes light dismiss close the popover again
 * right away.
 */
export const useAutoOpen = ({
	host,
	popoverRef,
	disabled,
	openOnHover,
	openOnFocus,
}: UseAutoOpenOptions) => {
	const [opened, setOpened] = useProperty<boolean>('opened', false);
	const triggers = useRef<Element[]>();

	const findTrigger = useCallback((): HTMLElement | undefined => {
		const t = triggers.current?.[0];
		return t instanceof HTMLElement ? t : undefined;
	}, []);

	const open = useCallback(() => {
		if (disabled) return;
		setOpened(true);
		popoverRef.current?.showPopover?.();
	}, [disabled, setOpened, popoverRef]);

	const close = useCallback(() => {
		setOpened(false);
		popoverRef.current?.hidePopover?.();
	}, [setOpened, popoverRef]);

	const toggle = useCallback(() => {
		const popover = popoverRef.current;
		if (popover?.matches(':popover-open')) close();
		else open();
	}, [close, open, popoverRef]);

	const meta = useMeta<{
		disabled?: boolean;
		open: () => void;
		closeTimeout?: ReturnType<typeof setTimeout>;
	}>({ disabled, open, closeTimeout: undefined });

	const cancelClose = useCallback(() => {
		clearTimeout(meta.closeTimeout);
	}, []);

	const handleFocusEnter = useCallback((e: Event) => {
		if (meta.disabled) return;
		// focus inside the opened popover (its autofocus) is not an open signal
		if (e.target !== findTrigger()) return;
		cancelClose();
		meta.open();
	}, []);

	const handlePointerEnter = useCallback(() => {
		if (meta.disabled) return;
		cancelClose();
		meta.open();
	}, []);

	const scheduleClose = useCallback(() => {
		clearTimeout(meta.closeTimeout);
		meta.closeTimeout = setTimeout(() => {
			const popover = popoverRef.current;
			if (
				openOnHover &&
				(host.matches(':hover') || popover?.matches(':hover'))
			) {
				return;
			}
			if (host.matches(':focus-within') || popover?.matches(':focus-within')) {
				return;
			}
			close();
		}, 100);
	}, [openOnHover, host, popoverRef, close]);

	/**
	 * After a close, focus that went nowhere (nothing active, body,
	 * hidden content — the platform leaves focus stuck there) goes back
	 * to the trigger. The focusin listener is lifted around the focus
	 * call: this restore is not an open signal.
	 */
	const restoreFocus = useCallback(() => {
		let el = document.activeElement as HTMLElement | null;
		while (el?.shadowRoot) {
			el = el.shadowRoot.activeElement as HTMLElement | null;
		}
		const lost = el == null || el === document.body || el.offsetParent == null;
		if (!lost) return;

		const t = findTrigger();
		if (!t) return;
		host.removeEventListener('focusin', handleFocusEnter);
		t.focus();
		host.addEventListener('focusin', handleFocusEnter);
	}, [findTrigger, handleFocusEnter, host]);

	const autofocusIn = useCallback((popover: HTMLElement) => {
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
	}, []);

	const onToggle = useCallback(
		(e: ToggleEvent) => {
			const opening = e.newState === 'open';
			setOpened(opening);
			if (opening) {
				const popover = e.target as HTMLElement;
				autofocusIn(popover);
			} else {
				restoreFocus();
			}
			host.dispatchEvent(
				new ToggleEvent('dropdown-toggle', {
					newState: e.newState,
					oldState: e.oldState,
					composed: true,
				}),
			);
		},
		[host, restoreFocus],
	);

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

	// Auto-open on focus (the same focusin the restore lifts)
	useEffect(() => {
		if (!openOnFocus || disabled) return;

		host.addEventListener('focusin', handleFocusEnter);
		host.addEventListener('focusout', scheduleClose);

		return () => {
			host.removeEventListener('focusin', handleFocusEnter);
			host.removeEventListener('focusout', scheduleClose);
		};
	}, [openOnFocus, disabled, handleFocusEnter, scheduleClose]);

	// Auto-open on hover
	useEffect(() => {
		if (!openOnHover || disabled) return;

		host.addEventListener('pointerenter', handlePointerEnter);
		host.addEventListener('pointerleave', scheduleClose);

		return () => {
			host.removeEventListener('pointerenter', handlePointerEnter);
			host.removeEventListener('pointerleave', scheduleClose);
		};
	}, [openOnHover, disabled, handlePointerEnter, scheduleClose]);

	return {
		triggers,
		opened,
		open,
		close,
		toggle,
		onToggle,
		scheduleClose,
		cancelClose,
		restoreFocus,
	};
};
