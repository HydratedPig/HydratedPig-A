module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ], // 定义文件继承的子规范
  parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //     experimentalObjectRestSpread: true,
  //   },
  //   requireConfigFile: false,
    project: './tsconfig.json',
  },
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
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'array-callback-return': 0,
    'arrow-parens': [ 2, 'as-needed' ],
    'class-methods-use-this': 0,
    'consistent-return': 1,
    'func-names': 0,
    'guard-for-in': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/extensions': 0,
    'import/first': 1,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 'off',
    'max-len': [
      'warn',
      200,
      4,
      {
        comments: 150,
      },
    ],
    'no-bitwise': [
      'error',
      {
        allow: [
          '~',
        ],
      },
    ],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': 1,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
      },
    ],
    'no-use-before-define': 0,
    // 'react/jsx-props-no-spreading': 0,
    'object-curly-newline': [
      'error',
      {
        minProperties: 5,
        consistent: true,
        multiline: true,
      },
    ],
    'object-shorthand': 0,
    'prefer-destructuring': [
      'warn',
    ],
    'react/forbid-prop-types': 1,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': [
      2, 2,
    ],
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-state': [
      'warn',
    ],
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    semi: 1,
  },
};
