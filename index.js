module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@jetbrains/eslint-config',
    '@jetbrains/eslint-config/browser',
    '@jetbrains/eslint-config/es6',
    '@jetbrains/eslint-config/node'
  ],
  rules: {
    'no-magic-numbers': 'off',
    'valid-jsdoc': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ]
  }
};