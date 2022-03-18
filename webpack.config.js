const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './demo.js', output: {
    path: path.resolve(__dirname, 'dist'), filename: 'bundle.js',
  }, plugins: [new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(true),
    CODE_FOR_IE: JSON.stringify(true),
    CODE_FOR_CHROME: JSON.stringify(true),
  })]
};
