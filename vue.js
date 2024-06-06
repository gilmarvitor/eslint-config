module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
        bracketSpacing: true,
        vueIndentScriptAndStyle: true,
        htmlWhitespaceSensitivity: 'ignore',
        embeddedLanguageFormatting: 'auto',
        singleAttributePerLine: true,
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    vue: {
      version: '3',
    },
  },
}
