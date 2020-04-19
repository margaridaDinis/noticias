module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['coverage'],
  rules: {
    'no-console': 1,
    'no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
};
