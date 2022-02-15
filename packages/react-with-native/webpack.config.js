var path = require("path");
var webpack = require("webpack");
//TODO: figure out if we still need this
module.exports = {
  entry: "./index",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"],
        },
      },
    ],
  },
};
