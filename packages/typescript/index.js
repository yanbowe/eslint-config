const basic = require('@soybeanjs/eslint-config-basic');

module.exports = {
  extends: ['@soybeanjs/eslint-config-basic', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  overrides: basic.overrides,
  rules: {
    // TS
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Override JS
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', ignoreRestSiblings: false, varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

    // off
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
