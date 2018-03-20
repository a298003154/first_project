var path = require("path"),
  webpack = require("webpack"),
  htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    filename: './src/App.js',
  },
  output: {
    path: '/dist',
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: /node_module/,
        include: '/src',
        loader: 'babel',
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      fiename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
};
