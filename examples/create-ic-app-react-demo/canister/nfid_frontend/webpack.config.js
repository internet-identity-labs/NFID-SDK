const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const fs = require("fs")

var canister_ids
try {
  canister_ids = JSON.parse(
    fs
      .readFileSync(
        path.resolve(__dirname, "../../.dfx/local/canister_ids.json"),
      )
      .toString(),
  )
} catch (e) {
  console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
}

const canisterEnv = Object.entries(canister_ids).reduce(
  (acc, [key, val]) => ({
    ...acc,
    [`${key.toUpperCase()}_CANISTER_ID`]: JSON.stringify(val.local),
  }),
  {},
)

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 9090,
    allowedHosts: [".ngrok.io"],
    historyApiFallback: true,
    static: [path.resolve(__dirname, "build")],
  },
  plugins: [
    new webpack.DefinePlugin({
      IC_HOST: JSON.stringify("http://localhost:8000"),
      II_ENV: JSON.stringify("development"),
      FRONTEND_MODE: JSON.stringify("development"),
      ...canisterEnv,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      scriptLoading: "blocking",
      template: path.resolve(__dirname, "build/index.html"),
    }),
  ],
}
