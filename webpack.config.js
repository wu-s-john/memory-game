/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/scripts/main.js',
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-flow-strip-types']
          }
        }
      }
    ]
  },
  devtool: 'source-map'

};
