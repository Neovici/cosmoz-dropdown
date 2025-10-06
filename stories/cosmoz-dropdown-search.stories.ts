import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from '@pionjs/pion';
import '../src';

const meta: Meta = {
	title: 'Cosmoz Dropdown/Search',
	component: 'cosmoz-dropdown-list-searchable',
	parameters: {
		docs: {
			description: {
				component: 'A searchable dropdown list with keyboard navigation support.',
			},
		},
	},
};

export default meta;

export type Story = StoryObj;

export const SearchableList: Story = {
	render: () => {
		return html`
			<cosmoz-dropdown-list-searchable>
				<div>Apple</div>
				<div>Banana</div>
				<div>Cherry</div>
				<div>Date</div>
				<div>Elderberry</div>
				<div>Fig</div>
				<div>Grape</div>
				<div>Honeydew</div>
				<div>Kiwi</div>
				<div>Lemon</div>
				<div>Mango</div>
				<div>Orange</div>
				<div>Papaya</div>
				<div>Raspberry</div>
				<div>Strawberry</div>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const SearchableMenu: Story = {
	render: () => {
		return html`
			<cosmoz-dropdown-menu-searchable>
				<div>Home</div>
				<div>About</div>
				<div>Services</div>
				<div>Products</div>
				<div>Portfolio</div>
				<div>Contact</div>
				<div>Blog</div>
				<div>FAQ</div>
				<div>Support</div>
				<div>Documentation</div>
			</cosmoz-dropdown-menu-searchable>
		`;
	},
};

export const WithClickHandlers: Story = {
	render: () => {
		const handleClick = (text: string) => {
			// Selection handler - you can integrate with your app state
			const event = new CustomEvent('item-selected', { 
				detail: { value: text },
				bubbles: true,
				composed: true 
			});
			document.dispatchEvent(event);
		};

		return html`
			<cosmoz-dropdown-list-searchable>
				<div @click=${() => handleClick('Red')}>Red</div>
				<div @click=${() => handleClick('Green')}>Green</div>
				<div @click=${() => handleClick('Blue')}>Blue</div>
				<div @click=${() => handleClick('Yellow')}>Yellow</div>
				<div @click=${() => handleClick('Purple')}>Purple</div>
				<div @click=${() => handleClick('Orange')}>Orange</div>
				<div @click=${() => handleClick('Pink')}>Pink</div>
				<div @click=${() => handleClick('Brown')}>Brown</div>
				<div @click=${() => handleClick('Black')}>Black</div>
				<div @click=${() => handleClick('White')}>White</div>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const LargeDataset: Story = {
	render: () => {
		const countries = [
			'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia',
			'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
			'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
			'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
			'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China',
			'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
			'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
			'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
			'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
			'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia',
			'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
			'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos',
			'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
			'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
			'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
			'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
			'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
			'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
			'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
			'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
			'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
			'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland',
			'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
			'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
			'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
			'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
		];

		return html`
			<cosmoz-dropdown-list-searchable>
				${countries.map((country) => html`<div>${country}</div>`)}
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const WithButtons: Story = {
	render: () => {
		const handleClick = (text: string) => {
			// Action handler - dispatches custom event
			const event = new CustomEvent('action-triggered', { 
				detail: { action: text },
				bubbles: true,
				composed: true 
			});
			document.dispatchEvent(event);
		};

		return html`
			<cosmoz-dropdown-list-searchable>
				<button @click=${() => handleClick('Save')}>Save</button>
				<button @click=${() => handleClick('Delete')}>Delete</button>
				<button @click=${() => handleClick('Export')}>Export</button>
				<button @click=${() => handleClick('Import')}>Import</button>
				<button @click=${() => handleClick('Copy')}>Copy</button>
				<button @click=${() => handleClick('Paste')}>Paste</button>
				<button @click=${() => handleClick('Cut')}>Cut</button>
				<button @click=${() => handleClick('Undo')}>Undo</button>
				<button @click=${() => handleClick('Redo')}>Redo</button>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const MixedContent: Story = {
	render: () => {
		return html`
			<cosmoz-dropdown-list-searchable>
				<div>Text Item 1</div>
				<button>Button Item</button>
				<a href="#" @click=${(e: Event) => e.preventDefault()}>Link Item</a>
				<div>Text Item 2</div>
				<button>Another Button</button>
				<div>Text Item 3</div>
				<a href="#" @click=${(e: Event) => e.preventDefault()}>Another Link</a>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const SearchableMenuWithStyling: Story = {
	render: () => {
		return html`
			<style>
				.styled-menu div,
				.styled-menu button {
					padding: 12px 16px;
					border-bottom: 1px solid #eee;
					transition: background-color 0.2s;
				}
				.styled-menu div:hover,
				.styled-menu button:hover {
					background-color: #f5f5f5;
				}
				.styled-menu button {
					width: 100%;
					text-align: left;
					border: none;
					background: none;
					cursor: pointer;
					font-family: inherit;
					font-size: inherit;
				}
			</style>
			<cosmoz-dropdown-menu-searchable class="styled-menu">
				<div>Dashboard</div>
				<div>Analytics</div>
				<div>Reports</div>
				<button>Settings</button>
				<button>Profile</button>
				<div>Help</div>
				<button>Logout</button>
			</cosmoz-dropdown-menu-searchable>
		`;
	},
};

export const AutoFocusDemo: Story = {
	render: () => {
		return html`
			<p>The search input should automatically receive focus when the dropdown opens.</p>
			<cosmoz-dropdown-list-searchable>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};

export const KeyboardNavigationDemo: Story = {
	render: () => {
		return html`
			<div>
				<h3>Keyboard Navigation Instructions:</h3>
				<ul>
					<li><strong>ArrowDown</strong>: Move focus to next item (or first item from search)</li>
					<li><strong>ArrowUp</strong>: Move focus to previous item (or last item from search)</li>
					<li><strong>Enter</strong>: Select focused item (or single filtered result from search)</li>
					<li><strong>Escape</strong>: Clear search and return focus to search input</li>
				</ul>
			</div>
			<cosmoz-dropdown-list-searchable>
				<div>First Item</div>
				<div>Second Item</div>
				<div>Third Item</div>
				<div>Fourth Item</div>
				<div>Fifth Item</div>
				<div>Sixth Item</div>
				<div>Seventh Item</div>
				<div>Eighth Item</div>
				<div>Ninth Item</div>
				<div>Tenth Item</div>
			</cosmoz-dropdown-list-searchable>
		`;
	},
};
