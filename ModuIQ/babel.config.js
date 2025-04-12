module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  ignore: ['**/*.test.js', '**/*.spec.js']
};