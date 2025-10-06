import { css } from '@pionjs/pion';

export const searchableMenuStyle = css`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}

	.search-container {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--cosmoz-dropdown-menu-bg-color, #fff);
		border-bottom: 1px solid var(--cosmoz-dropdown-search-border-color, #e0e0e0);
		padding: var(--cosmoz-dropdown-search-padding, 8px 12px);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px) var(--cosmoz-dropdown-border-radius, 15px) 0 0;
	}

	.search-input {
		width: 100%;
		border: 1px solid var(--cosmoz-dropdown-search-input-border-color, #ccc);
		border-radius: var(--cosmoz-dropdown-search-input-border-radius, 4px);
		padding: var(--cosmoz-dropdown-search-input-padding, 8px 12px);
		font-size: var(--cosmoz-dropdown-search-input-font-size, 14px);
		line-height: var(--cosmoz-dropdown-search-input-line-height, 20px);
		color: var(--cosmoz-dropdown-search-input-color, #101010);
		background: var(--cosmoz-dropdown-search-input-bg-color, #fff);
		box-sizing: border-box;
		outline: none;
	}

	.search-input:focus {
		border-color: var(--cosmoz-dropdown-search-input-focus-border-color, var(--cosmoz-selection-color, #3a91e2));
		box-shadow: var(--cosmoz-dropdown-search-input-focus-box-shadow, 0 0 0 2px rgba(58, 145, 226, 0.2));
	}

	.search-input::placeholder {
		color: var(--cosmoz-dropdown-search-input-placeholder-color, #999);
	}

	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	.no-results {
		padding: 10px 24px;
		color: var(--cosmoz-dropdown-menu-no-results-color, #999);
		font-style: italic;
		text-align: center;
	}
`;