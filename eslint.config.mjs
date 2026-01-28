import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	...cfg,
	{
		rules: {
			'max-lines-per-function': 'off',
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'import/group-exports': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
	{
		files: ['test/**/*.js', 'test/**/*.ts'],
		rules: {
			'mocha/max-top-level-suites': 'off',
			'mocha/no-top-level-hooks': 'off',
		},
	},
	{ ignores: ['coverage/**', 'dist/**', 'storybook-static/**'] },
];
