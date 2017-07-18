module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-unused-expressions': [1, { 'allowTaggedTemplates': true }]
  },
  'env': {
    'browser': true,
  },
};
