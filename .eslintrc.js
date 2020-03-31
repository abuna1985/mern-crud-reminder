module.exports = {
  env: {
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'prettier', 
    'jest'
  ],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false
      }
    ]
  },
};
