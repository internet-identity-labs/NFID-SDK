const fs = require("fs")

if (process.env.FILTER_DEV_CANISTER === "true") {
  const DFX_JSON_PATH = "dfx.json"

  const LOCAL_CANISTER = [
    "internet_identity",
    "identity_manager",
    "pub_sub_channel",
    "nfid_frontend",
  ]

  const DEV_DFX_CONF = require(`../${DFX_JSON_PATH}`)

  const PROD_DFX_CONF = JSON.stringify(
    {
      ...DEV_DFX_CONF,
      canisters: Object.keys(DEV_DFX_CONF.canisters)
        .filter((key) => !LOCAL_CANISTER.includes(key))
        .reduce(
          (acc, key) => ({ ...acc, [key]: DEV_DFX_CONF.canisters[key] }),
          {},
        ),
    },
    null,
    2,
  )
  fs.writeFileSync(DFX_JSON_PATH, PROD_DFX_CONF)
}
