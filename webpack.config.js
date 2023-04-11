const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/public/",
    },
    compress: true,
    port: 9000,
  },
};
