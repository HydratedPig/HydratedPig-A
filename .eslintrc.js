module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: [ 'airbnb', 'plugin:@typescript-eslint/recommended' ], // 定义文件继承的子规范
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //     experimentalObjectRestSpread: true,
  //   },
  //   requireConfigFile: false,
  //   project: './tsconfig.json',
  // },
  plugins: [
    'jsx-a11y',
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': { node: { extensions: [ '.js', '.jsx', '.ts', '.tsx', '.d.ts' ] } },
    react: {
      version: 'detect',
    },
  },
  // override: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
  //       'no-unused-expressions': 0,
  //       '@typescript-eslint/no-unused-expressions': 2,
  //     },
  //   },
  // ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'linebreak-style': 'off',
    'func-names': 0,
    'max-len': [
      'warn',
      200,
      4,
      {
        comments: 150,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'react/jsx-indent': [
      2, 2,
    ],
    semi: 1,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'no-return-assign': 0,
    'react/no-multi-comp': 0,
    'array-callback-return': 0,
    'no-underscore-dangle': 0,
    'no-bitwise': [
      'error',
      {
        allow: [
          '~',
        ],
      },
    ],
    'no-plusplus': 1,
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/img-has-alt': 0,
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
      },
    ],
    'react/no-unused-state': [
      'warn',
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'object-shorthand': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/extensions': 0,
    'no-debugger': 'off',
    'react/jsx-closing-tag-location': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 1,
    'class-methods-use-this': 0,
    'consistent-return': 1,
    'import/first': 1,
    'no-console': 'off',
    'prefer-destructuring': [
      'warn',
    ],
    'object-curly-newline': [
      'error',
      {
        minProperties: 5,
        consistent: true,
        multiline: true,
      },
    ],
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'arrow-parens': [ 2, 'as-needed' ],
    // 'react/jsx-props-no-spreading': 0,
    'no-use-before-define': 0,
  },
};
