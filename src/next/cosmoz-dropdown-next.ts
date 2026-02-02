import { component, css, useRef } from '@pionjs/pion';
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
		margin: 0;
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
	}
`;

interface DropdownProps {
	placement?: string;
}

const CosmozDropdownNext = ({
	placement = 'bottom span-right',
}: DropdownProps) => {
	const popover = useRef<HTMLElement>();

	const toggle = () => {
		popover.current?.togglePopover();
	};

	return html`
		<slot name="button" @click=${toggle}></slot>
		<div
			popover
			style="position-area: ${placement}"
			@toggle=${autofocus}
			${ref((el) => {
				popover.current = el as HTMLElement | undefined;
			})}
		>
			<slot></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-dropdown-next',
	component<DropdownProps>(CosmozDropdownNext, {
		styleSheets: [style],
		observedAttributes: ['placement'],
		shadowRootInit: { mode: 'open', delegatesFocus: true },
	}),
);
