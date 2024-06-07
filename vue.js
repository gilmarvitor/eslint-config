module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    vue: {
      version: '3',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'vue-eslint-parser': ['.vue']
    },
  },
}
