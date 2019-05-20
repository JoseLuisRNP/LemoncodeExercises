const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: "./js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ]
})