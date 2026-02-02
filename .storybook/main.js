export default {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async viteFinal(config) {
		return {
			...config,
			resolve: {
				...config.resolve,
				dedupe: ['@pionjs/pion', '@neovici/cosmoz-utils'],
			},
		};
	},
};
