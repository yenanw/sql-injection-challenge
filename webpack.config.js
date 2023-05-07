const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const config = [
  {
    template: "index.html",
    filename: "index.html",
    codeFile: "index",
  },
  {
    template: "challenges/cookies.html",
    filename: "cookies.html",
    codeFile: "cookies",
  },
  {
    template: "challenges/warmup.html",
    filename: "warmup.html",
    codeFile: "warmup",
  },
];

const entryHtmlPlugins = config.map(({ template, filename, codeFile }) => {
  const obj = {
    template: `./public/${template}`,
    filename: filename,
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
    warmup: "./src/challenges/warmup.js",
    cookies: "./src/challenges/cookies.js",
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
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images',
      //         publicPath: 'images'
      //       }
      //     }
      //   ]
      //   },
    ],
  },

  plugins: [...entryHtmlPlugins, new NodePolyfillPlugin()],

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
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
