import type { TemplateResult } from 'lit-html';

export interface MenuItem {
	label: string;
	value?: unknown;
	icon?: TemplateResult;
	suffix?: TemplateResult;
	disabled?: boolean;
	group?: string;
}

export type MenuSource =
	| MenuItem[]
	| Promise<MenuItem[]>
	| ((query: string) => MenuItem[] | Promise<MenuItem[]>);
