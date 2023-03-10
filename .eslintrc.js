module.exports = {
	extends: ['semistandard', 'plugin:astro/recommended'],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'space-before-function-paren': 'off',
		'no-unused-vars': 'off'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {}
		}
	]
};
