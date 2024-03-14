module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/ignore': ['vue-router'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    'vue',
    'tailwindcss',
    '@typescript-eslint',
    'prettier-plugin-tailwindcss',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-unused-classname': 'off',
    'tailwindcss/no-unknown-classname': 'off',
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: [],
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-slot-attribute': 'warn',
    'vue/no-deprecated-slot-scope-attribute': 'warn',
    'vue/no-deprecated-v-is': 'warn',
    'vue/no-deprecated-v-on-native-modifier': 'warn',
    'vue/no-deprecated-vue-config-keycodes': 'warn',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-setup-props-destructure': 'warn',
    'vue/no-v-for-template-key-on-child': 'warn',
    'vue/no-watch-after-await': 'error',
    'vue/require-slots-as-functions': 'warn',
    'vue/require-toggle-inside-transition': 'warn',
    'vue/valid-v-is': 'error',
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {},
    },
  ],
}
