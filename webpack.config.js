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
  {
    page: "challenges/syringe.html",
    codeFile: "syringe",
  },
];

const entryHtmlPlugins = config.map(({ page, codeFile }) => {
  const obj = {
    filename: page,
    template: `./public/${page}`,
  };

  if (codeFile === "*") {
    obj.inject = "body";
  } else if (codeFile !== undefined) {
    obj.chunks = [codeFile];
  } else {
    obj.inject = false;
  }

  return new HtmlWebpackPlugin(obj);
});

module.exports = {
  entry: {
    index: "./src/index.js",
    syringe: "./src/challenges/syringe/syringe.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
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

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/public/",
    },
    proxy: {
      "/api": "http://127.0.0.1:1234",
    },

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, Content-Type, Authorization",
    },
    compress: true,
    port: 3000,
  },
};
