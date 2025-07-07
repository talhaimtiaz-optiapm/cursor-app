import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin
    },
    rules: {
      // Core ESLint rules
      'no-unused-vars': 'off', // Turn off for now since React imports are needed for JSX
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-console': 'error',
      'consistent-return': 'error',
      
      // React rules
      'react/jsx-key': 'error',
      'react/prop-types': 'error',
      'react/forbid-component-props': ['error', {
        forbid: [
          {
            propName: 'style',
            message: 'Use className instead of inline styles'
          }
        ]
      }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      
      // JSX A11y rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]; 