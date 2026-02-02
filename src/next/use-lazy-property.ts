import { useMemo } from '@pionjs/pion';

export type LazyProperty<T, A extends unknown[] = []> =
	| undefined
	| T
	| Promise<T | undefined>
	| ((...args: A) => T | undefined)
	| ((...args: A) => Promise<T | undefined> | undefined);

const invoke = <T, A extends unknown[]>(
	prop: LazyProperty<T, A>,
	...args: A
): T | Promise<T | undefined> | undefined => {
	if (typeof prop === 'function') {
		return (prop as (...args: A) => T | Promise<T | undefined> | undefined)(
			...args,
		);
	}
	return prop;
};

export const useLazyProperty = <T, A extends unknown[]>(
	prop: LazyProperty<T, A>,
	...args: A
): Promise<T | undefined> =>
	useMemo(() => Promise.resolve(invoke(prop, ...args)), [prop, ...args]);
