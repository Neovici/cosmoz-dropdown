import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-dropdown-menu-group-next';
import '../src/cosmoz-dropdown-menu-next';
import '../src/cosmoz-dropdown-next';
import '../src/cosmoz-keybinding-badge';
import '../src/cosmoz-menu-label';

const meta: Meta = {
	title: 'Cosmoz Dropdown Menu Next',
	component: 'cosmoz-dropdown-menu-next',
};

export default meta;

export type Story = StoryObj;

// Icons for the stories
// prettier-ignore
/* eslint-disable max-len */
const copyIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`;

const editIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26465C18.1294 3.55059 18.1904 3.85706 18.1904 4.16667C18.1904 4.47627 18.1294 4.78275 18.0109 5.06868C17.8925 5.35462 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const deleteIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M2.5 5H4.16667H17.5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const shareIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7.15833 11.2583L12.85 14.575"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.8417 5.42499L7.15833 8.74166"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

const downloadIcon = html`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;
/* eslint-enable max-len */

/**
 * Basic menu with items
 */
export const Basic: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Copy</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Edit</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Delete</cosmoz-menu-label>
				</cosmoz-button>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with search functionality
 */
export const WithSearch: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Searchable Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next searchable placeholder="Search actions...">
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Copy</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Cut</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Paste</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Edit</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Delete</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Duplicate</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Share</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Download</cosmoz-menu-label>
				</cosmoz-button>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu with grouped items
 */
export const WithGroups: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Grouped Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next>
				<cosmoz-dropdown-menu-group-next label="Edit">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Copy</cosmoz-menu-label>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Cut</cosmoz-menu-label>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Paste</cosmoz-menu-label>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
				<cosmoz-dropdown-menu-group-next label="Actions">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Share</cosmoz-menu-label>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Download</cosmoz-menu-label>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
				<cosmoz-dropdown-menu-group-next label="Danger Zone">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Delete</cosmoz-menu-label>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu items with icons
 */
export const WithIcons: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Menu with Icons</cosmoz-button>
			<cosmoz-dropdown-menu-next>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${copyIcon}
					<cosmoz-menu-label>Copy</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${editIcon}
					<cosmoz-menu-label>Edit</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${shareIcon}
					<cosmoz-menu-label>Share</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${downloadIcon}
					<cosmoz-menu-label>Download</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${deleteIcon}
					<cosmoz-menu-label>Delete</cosmoz-menu-label>
				</cosmoz-button>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Menu items with keyboard shortcut badges
 */
export const WithKeybindings: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Menu with Shortcuts</cosmoz-button>
			<cosmoz-dropdown-menu-next>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${copyIcon}
					<cosmoz-menu-label>Copy</cosmoz-menu-label>
					<cosmoz-keybinding-badge slot="suffix">⌘C</cosmoz-keybinding-badge>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Cut</cosmoz-menu-label>
					<cosmoz-keybinding-badge slot="suffix">⌘X</cosmoz-keybinding-badge>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					<cosmoz-menu-label>Paste</cosmoz-menu-label>
					<cosmoz-keybinding-badge slot="suffix">⌘V</cosmoz-keybinding-badge>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${editIcon}
					<cosmoz-menu-label>Edit</cosmoz-menu-label>
					<cosmoz-keybinding-badge slot="suffix">⌘E</cosmoz-keybinding-badge>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${deleteIcon}
					<cosmoz-menu-label>Delete</cosmoz-menu-label>
					<cosmoz-keybinding-badge slot="suffix">⌘⌫</cosmoz-keybinding-badge>
				</cosmoz-button>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Disabled menu items
 */
export const WithDisabledItems: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Open Menu with Disabled Items</cosmoz-button>
			<cosmoz-dropdown-menu-next>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${copyIcon}
					<cosmoz-menu-label>Copy</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem" disabled>
					${editIcon}
					<cosmoz-menu-label>Edit (disabled)</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem">
					${shareIcon}
					<cosmoz-menu-label>Share</cosmoz-menu-label>
				</cosmoz-button>
				<cosmoz-button variant="tertiary" full-width role="menuitem" disabled>
					${deleteIcon}
					<cosmoz-menu-label>Delete (disabled)</cosmoz-menu-label>
				</cosmoz-button>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};

/**
 * Full featured example matching Untitled UI command menu design
 */
export const FullExample: Story = {
	render: () => html`
		<cosmoz-dropdown-next>
			<cosmoz-button slot="button">Command Menu</cosmoz-button>
			<cosmoz-dropdown-menu-next searchable placeholder="Type a command...">
				<cosmoz-dropdown-menu-group-next label="Clipboard">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						${copyIcon}
						<cosmoz-menu-label>Copy</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘C</cosmoz-keybinding-badge>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Cut</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘X</cosmoz-keybinding-badge>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						<cosmoz-menu-label>Paste</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘V</cosmoz-keybinding-badge>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
				<cosmoz-dropdown-menu-group-next label="Actions">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						${editIcon}
						<cosmoz-menu-label>Edit</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘E</cosmoz-keybinding-badge>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						${shareIcon}
						<cosmoz-menu-label>Share</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘S</cosmoz-keybinding-badge>
					</cosmoz-button>
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						${downloadIcon}
						<cosmoz-menu-label>Download</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘D</cosmoz-keybinding-badge>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
				<cosmoz-dropdown-menu-group-next label="Danger Zone">
					<cosmoz-button variant="tertiary" full-width role="menuitem">
						${deleteIcon}
						<cosmoz-menu-label>Delete</cosmoz-menu-label>
						<cosmoz-keybinding-badge slot="suffix">⌘⌫</cosmoz-keybinding-badge>
					</cosmoz-button>
				</cosmoz-dropdown-menu-group-next>
			</cosmoz-dropdown-menu-next>
		</cosmoz-dropdown-next>
	`,
};
