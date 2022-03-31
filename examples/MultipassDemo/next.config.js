const path = require("path")
const dfxJson = require("./dfx.json")

process.env.NEXT_PUBLIC_ENV =
  process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV

const webpack = require("webpack")

const ICNetworks = {
  local: "local",
  ic: "ic",
}

const IC_NETWORK = process.env.DFX_NETWORK || ICNetworks.ic

const getCanisters = () => {
  return IC_NETWORK === ICNetworks.local
    ? require(path.resolve(".dfx", ICNetworks.local, "canister_ids.json"))
    : require(path.resolve("canister_ids.json"))
}

const canisterIdsEnv = () => {
  const canisters = getCanisters()
  for (const canister in canisters) {
    const envVar = `NEXT_PUBLIC_${canister.toUpperCase()}_CANISTER_ID`
    process.env[envVar] = canisters[canister][IC_NETWORK]
  }
}

canisterIdsEnv()

// List of all aliases for canisters. This creates the module alias for
// the `import ... from "@dfinity/ic/canisters/xyz"` where xyz is the name of a
// canister.
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const outputRoot = path.join(
      __dirname,
      ".dfx",
      IC_NETWORK,
      "canisters",
      name,
    )

    return {
      ...acc,
      [`ic/${name}`]: path.join(outputRoot, name + ".js"),
      [`ic/${name}.did`]: path.join(outputRoot, name + ".did.js"),
    }
  },
  {},
)

module.exports = {
  trailingSlash: true,
  exportPathMap: () => {
    return {
      "/": { page: "/" },
    }
  },
  webpack: (
    config,
    {
      buildId: _buildId,
      dev: _dev,
      isServer: _isServer,
      defaultLoaders: _defaultLoaders,
      webpack: _webpack,
    },
  ) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        DFX_NETWORK: IC_NETWORK,
      }),
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    }

    // Important: return the modified config
    return config
  },
}
