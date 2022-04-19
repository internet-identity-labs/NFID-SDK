const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "static/js/variables.js",
  },
  devServer: {
    port: 9090,
    allowedHosts: [".ngrok.io"],
    historyApiFallback: true,
    static: [path.resolve(__dirname, "build")],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "build/index.html"),
    }),
  ],
}
