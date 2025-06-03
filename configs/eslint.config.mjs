import eslintConfigPrettier from '@electron-toolkit/eslint-config-prettier'

export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/out'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },
  eslintConfigPrettier
]
