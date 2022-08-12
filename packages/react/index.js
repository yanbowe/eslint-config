module.exports = {
  extends: ['plugin:react/recommended', '@soybeanjs/eslint-config-ts'],
  settings: {
    react: {
      version: '17.0'
    }
  },
  plugins: ['react-hooks'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
