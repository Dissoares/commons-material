import eslint from '@eslint/js';mport eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';mport eslint from '@eslint/js';mport eslint from '@eslint/js';

export default tseslint.config(
  {
    ignores: ['dist/**', 'out-tsc/**', 'coverage/**', 'node_modules/**', '.angular/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
);
