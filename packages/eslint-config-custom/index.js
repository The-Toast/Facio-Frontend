module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'sort-exports'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  rules: {
    'arrow-body-style': ['error'],
    'no-unused-vars': 'off',
    'sort-exports/sort-exports': ['error'],
    '@next/next/no-html-link-for-pages': ['error'],
    '@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
    '@typescript-eslint/no-unused-vars': ['error']
  },
  overrides: [
    {
      files: ['**/style.ts'],
      rules: {
        'sort-exports/sort-exports': ['off']
      }
    }
  ]
}