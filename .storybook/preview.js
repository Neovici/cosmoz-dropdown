import '@neovici/cosmoz-button';
import '@neovici/cosmoz-tokens';
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import { menuBindings } from '../src/menu-keybindings';

/**
 * Component that provides keybindings context for all stories.
 * Uses children prop instead of slot since shadow DOM is disabled
 * to allow context events to bubble up to the provider.
 */
const KeybindingsProvider = function (props) {
	const register = useKeybindings(menuBindings);

	return html`<cosmoz-keybinding-provider .value=${register}>
		${props.content}
	</cosmoz-keybinding-provider>`;
};

customElements.define(
	'storybook-keybindings',
	component(KeybindingsProvider, { useShadowDOM: false }),
);

export default {
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}

			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
					@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						padding: calc(var(--cz-spacing) * 4);
						min-height: 100%;
						transition:
							background-color 0.2s,
							color 0.2s;
					}
				</style>
				<storybook-keybindings
					.content=${html`<div class="story-root">${story()}</div>`}
				></storybook-keybindings>
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
};
