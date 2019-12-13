const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },

  mode: "development",

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: "index.html", to: "" },
      {
        from: "manifest.json",
        to: ""
      }
    ]),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src-sw.js",
      swDest: "sw.js"
    })
  ]
};
