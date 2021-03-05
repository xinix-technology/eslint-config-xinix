module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:mocha/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': ['error'],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'require-await': ['error'],
    'max-len': ['error', { code: 120 }],
    // 'max-lines': ['error', 200],
    // 'max-lines-per-function': ['error', 20],
    // complexity: ['error', 6],
    'max-nested-callbacks': ['error', 2],
    'max-depth': ['error', 3],
    'max-params': ['error', 3],
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-hooks-for-single-case': 'off',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
};
