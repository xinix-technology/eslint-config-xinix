module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
  ],
  rules: {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': ['error'],
    'no-console': ['error', { 'allow': ['info', 'warn', 'error'] }],
    'require-await': ['error'],
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
  },
};
