export default {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
