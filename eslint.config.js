const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      parser: require('espree'),
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      // JavaScript-specific rules
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // TypeScript-specific rules
    },
  },
];
