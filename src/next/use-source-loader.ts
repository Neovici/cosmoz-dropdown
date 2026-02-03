import { useEffect, useMemo, useState } from '@pionjs/pion';
import type { MenuItem, MenuSource } from './types';

interface SourceLoaderResult {
	items: MenuItem[];
	loading: boolean;
	error: string | null;
}

/** Resolve source value (handles array, promise, or function) */
const resolveSource = (
	source: MenuSource | undefined,
	query: string,
): Promise<MenuItem[]> => {
	if (!source) return Promise.resolve([]);
	const result = typeof source === 'function' ? source(query) : source;
	return Promise.resolve(result).then((items) => items ?? []);
};

/** Hook that loads and filters items from a MenuSource */
export const useSourceLoader = (
	source: MenuSource | undefined,
	query: string,
): SourceLoaderResult => {
	const [cachedItems, setCachedItems] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Fetch from source on mount and query change
	useEffect(() => {
		let cancelled = false;

		setLoading(true);
		setError(null);

		resolveSource(source, query)
			.then((items) => {
				if (!cancelled) setCachedItems(items);
			})
			.catch((err) => {
				if (!cancelled) {
					setError(err?.message ?? 'Failed to load items');
				}
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});

		return () => {
			cancelled = true;
		};
	}, [source, query]);

	// Client-side filtering (instant feedback)
	const items = useMemo(() => {
		if (!query.trim()) return cachedItems;
		const q = query.toLowerCase();
		return cachedItems.filter((item) => item.label.toLowerCase().includes(q));
	}, [cachedItems, query]);

	return { items, loading, error };
};
