// import {} from "@craco/craco"
import { config as loadEnv } from "dotenv"

import fs from "fs"
import path from "path"
import dfxJson from "./dfx.json"

const isDev = !["ic", "dev"].includes(process.env["DFX_NETWORK"] || "")

const CracoAlias = require("craco-alias")
const webpack = require("webpack")

loadEnv({ path: path.resolve(__dirname, ".env") })

const DFX_PORT = dfxJson.networks.local.bind.split(":")[1]

const getCanisterIds = (): { [key: string]: { [key: string]: string } } => {
  try {
    return JSON.parse(
      // @ts-ignore
      fs
        .readFileSync(
          isDev ? ".dfx/local/canister_ids.json" : "./canister_ids.json",
        )
        .toString(),
    )
  } catch (e) {
    console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
    return {}
  }
}

const canisterEnv = Object.entries(getCanisterIds()).reduce(
  (acc, [key, val]) => ({
    ...acc,
    [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
      ? JSON.stringify(val.local)
      : JSON.stringify(val[process.env["DFX_NETWORK"] || ""] || ""),
  }),
  {},
)

const child_process = require("child_process")
function git(command: string) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim()
}

const config = {
  webpack: {
    configure: (webpackConfig: any, { env, paths }: any) => {
      const customEnv = {
        "process.env.GIT_VERSION": JSON.stringify(git("describe --always")),
        ...canisterEnv,
      }
      console.log(">> ", { customEnv })

      webpackConfig.plugins.push(new webpack.DefinePlugin(customEnv))
      return {
        ...webpackConfig,
        ignoreWarnings: [/Failed to parse source map from/],
      }
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // NOTE: required to include the generated files from .dfx folder
        unsafeAllowModulesOutsideOfSrc: true,
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: ".",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  devServer: {
    open: false,
    port: 3000,
    proxy: {
      fs: {
        allow: ["."],
      },
      // This proxies all http requests made to /api to our running dfx instance
      "/api": {
        target: `http://0.0.0.0:${DFX_PORT}`,
      },
    },
  },
}
export default config
