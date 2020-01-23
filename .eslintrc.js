module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
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
  "rules": {
    "max-len": [1, 120, 2, {
      "ignoreComments": true
    }],
    "react/jsx-filename-extension": [0],
    "react/prefer-stateless-function": "warn",
    "import/prefer-default-export": "off"
  }
};
