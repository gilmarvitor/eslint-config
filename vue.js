import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Exportando a configuração do ESLint
export default [
  // Definindo as opções globais
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  // Aplicando a configuração recomendada para JavaScript
  pluginJs.configs.recommended,

  // Aplicando a configuração recomendada para TypeScript
  ...tseslint.configs.recommended,

  // Aplicando a configuração essencial para Vue
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  { files: ['**/*.vue'] /* configuração do Vue */ },

  { files: ['**/*.{spec,test}.{js,ts}'] /* configuração de testes */ },
  { files: ['vite.config.ts' /* etc */] /* scripts de build */ },

  {
    ...pluginPrettierRecommended,
    rules: {
      'prettier/prettier': [
        'error',
        {
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
        { usePrettierrc: false },
      ],
    },
  },
  eslintConfigPrettier,
]
