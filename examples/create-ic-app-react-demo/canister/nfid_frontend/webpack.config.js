const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const cheerio = require("cheerio")
const path = require("path")
var fs = require("fs")


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
      // template: path.resolve(__dirname, "build/index.html"),
      templateContent: ({ htmlWebpackPlugin }) => {
        const $ = cheerio.load(
          fs.readFileSync(path.resolve(__dirname, "build/index.html"), "utf8"),
        )
        console.log(">> ", { html: $.html() })

        $("head").append(`
          <script>
            var IC_HOST = "http://localhost:8000"
            var II_ENV = "development"
            var INTERNET_IDENTITY_CANISTER_ID = "sp3hj-caaaa-aaaaa-aaajq-cai"
            var IDENTITY_MANAGER_CANISTER_ID = "zwmtd-uqaaa-aaaaa-aabwq-cai"
            var PUB_SUB_CHANNEL_CANISTER_ID = "z7py7-cyaaa-aaaaa-aabxa-cai"
            var FRONTEND_MODE = "development"
          </script>
        `)
        return $.html()
      },
    }),
  ],
}
