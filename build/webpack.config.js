var path = require("path"),
  webpack = require("webpack"),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  postcssPlugins = require('./postcss.config');


module.exports = {
  // context: path.resolve(__dirname, '../'),
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        include: '/src',
        loader: 'babel',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        exclude: '/node_modules',
        use: [
          'style-loader', 
          'css-loader?importLoaders=1', 
          { loader: 'postcss-loader',
            options: postcssPlugins
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: '/node_modules',
        use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: postcssPlugins}, 'less-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    }),

  ]
};
