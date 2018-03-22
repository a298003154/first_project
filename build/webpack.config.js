var path = require("path"),
  webpack = require("webpack"),
  htmlWebpackPlugin = require("html-webpack-plugin"),
  postcssPlugins = require("./postcss.config");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
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
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: "/node_modules",
        include: "/src",
        loader: "babel"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        exclude: "/node_modules",
        use: [
          "style-loader",
          "css-loader?importLoaders=1",
          {
            loader: "postcss-loader",
            options: postcssPlugins
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: "/node_modules",
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: postcssPlugins },
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: "/node_modules",
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: postcssPlugins },
          "scss-loader"
        ]
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
    })
  ]
};
