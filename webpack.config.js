const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: { path: __dirname + 'app', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
