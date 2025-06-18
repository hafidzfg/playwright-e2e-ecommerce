import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'dist/**',
      '.env',
    ],
  },
]);
