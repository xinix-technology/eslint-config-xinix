module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'standard',
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
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
    indent: ['error', 2, {
      ignoredNodes: ['PropertyDefinition'],
      SwitchCase: 1,
    }],
  },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
    {
      files: [
        '*.test.js',
        '*.test.mjs',
        '*.test.ts',
        '*.test.jsx',
        '*.test.tsx',
      ],
      extends: [
        'plugin:mocha/recommended',
      ],
      rules: {
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'max-nested-callbacks': 'off',
        'dot-notation': 'off',
      },
      env: {
        mocha: true,
      },
    },
  ],
};
