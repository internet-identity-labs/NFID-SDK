const path = require('path')
const dfxJson = require('./dfx.json')

const webpack = require('webpack')
const ICNetworks = {
  local: 'local',
  ic: 'ic'
}

const icNetwork = process.env.DFX_NETWORK || ICNetworks.ic

const II_CANISTER_ID = process.env.II_CANISTER_ID
const II_CANISTER_URL =
  icNetwork === ICNetworks.ic
    ? 'https://identity.ic0.app/#authorize'
    : `http://${II_CANISTER_ID}.localhost:8000/#authorize`

const getCanisters = () => {
  return icNetwork === ICNetworks.local
    ? require(path.resolve('.dfx', ICNetworks.local, 'canister_ids.json'))
    : require(path.resolve('canister_ids.json'))
}

const canisterIdsEnv = () => {
  const canisters = getCanisters()

  process.env.NEXT_PUBLIC_II_CANISTER_URL = II_CANISTER_URL
  console.log('>> ', { II_CANISTER_URL })

  for (const canister in canisters) {
    const envVar = `NEXT_PUBLIC_${canister.toUpperCase()}_CANISTER_ID`
    process.env[envVar] = canisters[canister][icNetwork]
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
      '.dfx',
      icNetwork,
      'canisters',
      name
    )

    return {
      ...acc,
      [`dfx-generated/${name}`]: path.join(outputRoot, name + '.js'),
      [`dfx-generated/${name}.did`]: path.join(outputRoot, name + '.did.js')
    }
  },
  {}
)

module.exports = {
  trailingSlash: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  },
  webpack: (
    config,
    {
      buildId: _buildId,
      dev: _dev,
      isServer: _isServer,
      defaultLoaders: _defaultLoaders,
      webpack: _webpack
    }
  ) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        DFX_NETWORK: 'local'
      })
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases
    }

    // Important: return the modified config
    return config
  }
}
