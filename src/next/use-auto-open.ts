import { useEffect, useRef } from '@pionjs/pion';

interface UseAutoOpenOptions {
	host: HTMLElement;
	popoverRef: { current?: HTMLElement };
	openOnHover?: boolean;
	openOnFocus?: boolean;
	open: () => void;
	close: () => void;
}

export const useAutoOpen = ({
	host,
	popoverRef,
	openOnHover,
	openOnFocus,
	open,
	close,
}: UseAutoOpenOptions) => {
	const closeTimeout = useRef<ReturnType<typeof setTimeout>>();

	const cancelClose = () => clearTimeout(closeTimeout.current);

	const scheduleClose = () => {
		clearTimeout(closeTimeout.current);
		closeTimeout.current = setTimeout(() => {
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
	};

	const handleEnter = () => {
		cancelClose();
		open();
	};

	// Auto-open on hover
	useEffect(() => {
		if (!openOnHover) return;

		host.addEventListener('pointerenter', handleEnter);
		host.addEventListener('pointerleave', scheduleClose);

		return () => {
			cancelClose();
			host.removeEventListener('pointerenter', handleEnter);
			host.removeEventListener('pointerleave', scheduleClose);
		};
	}, [openOnHover, host]);

	// Auto-open on focus
	useEffect(() => {
		if (!openOnFocus) return;

		host.addEventListener('focusin', handleEnter);
		host.addEventListener('focusout', scheduleClose);

		return () => {
			cancelClose();
			host.removeEventListener('focusin', handleEnter);
			host.removeEventListener('focusout', scheduleClose);
		};
	}, [openOnFocus, host]);

	return { scheduleClose, cancelClose };
};
