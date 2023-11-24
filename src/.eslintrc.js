module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'tailwindcss', '@typescript-eslint'],
  rules: {
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-unused-classname': 'off',
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
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {},
    },
  ],
}
