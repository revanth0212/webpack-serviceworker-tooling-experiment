const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AddCowPlugin = require("./plugin/AddCowPlugin");

const filename = `[name]-${Math.random()
  .toString(36)
  .slice(2)}.js`;

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    sw: "./src/ServiceWorker/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new AddCowPlugin(5),
    new CopyWebpackPlugin([
      {
        from: "index.html",
        to: "index.html"
      }
    ])
  ]
};
