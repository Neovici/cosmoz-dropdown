import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useRef, useState } from '@pionjs/pion';

const isFocused = (t: Element) => {
	if (t.matches(':focus-within')) {
		return true;
	}
	const popover = t.shadowRoot?.querySelector('[popover]');
	return popover?.matches(':focus-within') ?? false;
};

interface FocusState {
	focused?: boolean;
	closed?: boolean;
}
export interface UseFocusOpts {
	disabled?: boolean;
	onFocus?: (focused: boolean) => void;
}
export const useFocus = ({ disabled, onFocus }: UseFocusOpts) => {
	const [focusState, setState] = useState<FocusState>(),
		{ focused: _focused, closed } = focusState || {},
		focused = _focused && !disabled,
		meta = useMeta({ closed, onFocus }),
		setClosed = useCallback(
			(closed: boolean) => setState((p) => ({ ...p, closed })),
			[],
		),
		onToggle = useCallback((e: Event) => {
			const target = e.currentTarget as HTMLElement;
			return isFocused(target)
				? setState((p) => ({ focused: true, closed: !p?.closed }))
				: target.focus();
		}, []);

	useEffect(() => {
		if (!focused) {
			return;
		}
		const handler = (e: KeyboardEvent) => {
			if (e.defaultPrevented) {
				return;
			}
			const { closed } = meta;
			if (e.key === 'Escape' && !closed) {
				e.preventDefault();
				setClosed(true);
			} else if (['ArrowUp', 'Up'].includes(e.key) && closed) {
				e.preventDefault();
				setClosed(false);
			}
		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [focused]);

	return {
		focused,
		active: focused && !closed,
		setClosed,
		onToggle,
		onFocus: useCallback(
			(e: FocusEvent) => {
				const focused = isFocused(e.currentTarget as HTMLElement);
				setState({ focused });
				meta.onFocus?.(focused);
			},
			[meta],
		),
	};
};

export const useHostFocus = (host: HTMLElement & UseFocusOpts) => {
	const thru = useFocus(host),
		{ onFocus } = thru;

	const scheduleRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		host.setAttribute('tabindex', '0');

		const onFocusIn = (e: FocusEvent) => {
			clearTimeout(scheduleRef.current);
			onFocus(e);
		};

		const onFocusOut = (e: FocusEvent) => {
			clearTimeout(scheduleRef.current);
			const currentTarget = e.currentTarget as HTMLElement;
			// TODO: `onFocus` only uses `e.currentTarget`, consider refactoring to accept `HTMLElement` instead of `FocusEvent`
			scheduleRef.current = setTimeout(
				() => onFocus({ currentTarget } as unknown as FocusEvent),
				30,
			);
		};

		host.addEventListener('focusin', onFocusIn);
		host.addEventListener('focusout', onFocusOut);
		return () => {
			clearTimeout(scheduleRef.current);
			host.removeEventListener('focusin', onFocusIn);
			host.removeEventListener('focusout', onFocusOut);
		};
	}, [onFocus]);

	return thru;
};
