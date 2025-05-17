import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...js.environments.browser.globals,
        ...js.environments.es2021.globals,
        // Añadimos globals de Jest:
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        jest: 'readonly'
      }
    },
    plugins: {
      react: eslintPluginReact
    },
    rules: {
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
