const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const config = [
  {
    page: "index.html",
    codeFile: "index",
  },
  {
    page: "about.html",
  },
];

const entryHtmlPlugins = config.map(({ page, codeFile }) => {
  const obj = {
    filename: page,
    template: `./public/${page}`
  };

  if (codeFile === "*") {
    obj.inject = "body";
  } else if (codeFile !== undefined) {
    obj.chunk = [codeFile];
  } else {
    obj.inject = false;
  }

  return new HtmlWebpackPlugin(obj);
});

module.exports = {
  entry: { index: "./src/index.js" },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "javascript/auto",
      },
    ],
  },

  plugins: [...entryHtmlPlugins, new NodePolyfillPlugin()],

  resolve: {
    fallback: {
      fs: false,
    },
  },

  experiments: {
    topLevelAwait: true,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/public/",
    },
    compress: true,
    port: 9000,
  },
};
