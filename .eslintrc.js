/* global module */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'error',
		'no-alert': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-explicit-any': 0,
		'no-multiple-empty-lines': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		quotes: [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		]
	},
}