var merge = require('webpack-merge');
var common = require('./base.webpack.config');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "./js/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv({
      path: "./prod.env",
    }),
  ],
})