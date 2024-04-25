const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.join(__dirname, 'build', 'js'),
    publicPath: '/build/js/',
    filename: '[name].js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 3090,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    stats: 'errors-only'
  }

};