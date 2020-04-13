module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "consistent-return": "off",
    "react/prop-types": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "no-console": "off",
    "no-await-in-loop": "off",
    "no-async-promise-executor": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
