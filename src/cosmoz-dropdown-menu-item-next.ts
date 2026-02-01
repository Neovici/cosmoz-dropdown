import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, useEffect, useHost, useProperty } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

const style = css`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
		padding: calc(var(--cz-spacing, 0.25rem) * 2)
			calc(var(--cz-spacing, 0.25rem) * 3);
		border-radius: var(--cz-radius-sm, 0.375rem);
		cursor: pointer;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-secondary, #344054);
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
		user-select: none;
		outline: none;
	}

	:host(:hover),
	:host(:focus) {
		background-color: var(--cz-color-bg-primary-hover, #f9fafb);
		color: var(--cz-color-text-primary, #101828);
	}

	:host(:focus-visible) {
		box-shadow: var(--cz-focus-ring, 0 0 0 4px #f4ebff);
	}

	:host([disabled]) {
		color: var(--cz-color-text-disabled, #98a2b3);
		cursor: not-allowed;
		pointer-events: none;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--cz-color-fg-quaternary, #98a2b3);
	}

	:host(:hover) .icon,
	:host(:focus) .icon {
		color: var(--cz-color-fg-secondary, #344054);
	}

	:host([disabled]) .icon {
		color: var(--cz-color-fg-disabled, #98a2b3);
	}

	.label {
		flex: 1;
		min-width: 0;
	}

	.keybinding {
		flex-shrink: 0;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
	}

	:host([disabled]) .keybinding {
		color: var(--cz-color-text-disabled, #98a2b3);
	}

	/* Hide icon container when no icon is slotted */
	::slotted([slot='icon']) {
		width: 20px;
		height: 20px;
	}
`;

interface MenuItemProps {
	keybinding?: string;
	disabled?: boolean;
}

/**
 * Close the popover when clicking a menu item.
 */
const closePopover = (host: HTMLElement) => {
	const popover = host.closest('[popover]');
	if (popover instanceof HTMLElement) {
		popover.hidePopover();
	}
};

const CosmozDropdownMenuItemNext = ({ keybinding }: MenuItemProps) => {
	const [disabled] = useProperty<boolean>('disabled', false);
	const host = useHost();

	// Set up click and keyboard handlers on the host element
	useEffect(() => {
		const el = host as HTMLElement;

		const handleClick = () => {
			if (disabled) return;
			closePopover(el);
		};

		const handleKeydown = (e: KeyboardEvent) => {
			if (disabled) return;
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				closePopover(el);
				// Dispatch a click event for consumers
				el.dispatchEvent(
					new MouseEvent('click', { bubbles: true, composed: true }),
				);
			}
		};

		el.addEventListener('click', handleClick);
		el.addEventListener('keydown', handleKeydown);

		return () => {
			el.removeEventListener('click', handleClick);
			el.removeEventListener('keydown', handleKeydown);
		};
	}, [host, disabled]);

	return html`
		<span class="icon">
			<slot name="icon"></slot>
		</span>
		<span class="label">
			<slot></slot>
		</span>
		${keybinding
			? html`<span class="keybinding">${keybinding}</span>`
			: nothing}
	`;
};

customElements.define(
	'cosmoz-dropdown-menu-item-next',
	component<MenuItemProps>(CosmozDropdownMenuItemNext, {
		styleSheets: [normalize, style],
		observedAttributes: ['keybinding', 'disabled'],
		shadowRootInit: { mode: 'open' },
	}),
);

// Make the element focusable and set ARIA role
const MenuItemElement = customElements.get('cosmoz-dropdown-menu-item-next');
if (MenuItemElement) {
	const originalPrototype = MenuItemElement.prototype;
	const originalConnected = originalPrototype.connectedCallback;

	originalPrototype.connectedCallback = function () {
		originalConnected?.call(this);
		if (!this.hasAttribute('tabindex')) {
			this.setAttribute('tabindex', '0');
		}
		this.setAttribute('role', 'menuitem');
	};
}
