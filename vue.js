module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
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
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vuejs-accessibility/alt-text': 'error',
    'vuejs-accessibility/anchor-has-content': 'error',
    'vuejs-accessibility/form-control-has-label': 'error',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false,
      },
    ],
  },
}
