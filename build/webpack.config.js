var path = require("path"),
  webpack = require("webpack"),
  htmlWebpackPlugin = require("html-webpack-plugin"),

  postcssPlugins = require("./postcss.config"),
  utils = require('./utils');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(postcssPlugins.plugins)

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    "./src/main.js",
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js",
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".css", ".less"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      src: path.resolve(__dirname, "../src"),
      assets: path.resolve(__dirname, "../src/assets"),
      components: path.resolve(__dirname, "../src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: "/node_modules/",
        loader: 'vue-loader',
        options: {
          postcss: postcssPlugins,
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            }),
            scss: ExtractTextPlugin.extract({
              use: ['css-loader','sass-loader'],
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        include: "/src",
        loader: "babel"
      },
      {
        test: /\.html$/,
        loader: "vue-html-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader?importLoaders=1",
            {
              loader: "postcss-loader",
              options: postcssPlugins
            }
          ]
        })
      },
      // {
      //   test: /\.less$/,
      //   exclude: "/node_modules",
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     //{ loader: "postcss-loader", options: postcssPlugins },
      //     "less-loader"
      //   ]
      // },
      {
        test: /\.scss$/,
        exclude: "/node_modules",
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
          { loader: "postcss-loader", options: postcssPlugins },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: "/node_modules",
        loader: "url",
        query: {
          limit: 10000,
          name: "img/[name].[ext].[hash:7]"
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(
      ['dist/*'],　 //匹配删除的文件
      {
        root: path.resolve(__dirname, "../"), //根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
      }
    )
  ]
};
