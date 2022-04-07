const fs = require("fs")
const shell = require("shelljs")

const isDev = !["ic", "dev"].includes(process.env["DFX_NETWORK"] || "")

const DFX_JSON_PATH = "dfx.json"

const BACKEND_CANISTER = [
  "internet_identity",
  "identity_manager",
  "pub_sub_channel",
]

const getCanisterIds = () => {
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
    ...(key.includes("nfid_frontend") && isDev
      ? {
          "process.env.NFID_DOMAIN": JSON.stringify(
            `http://${val.local}.localhost:8000`,
          ),
        }
      : {}),
    [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
      ? JSON.stringify(val.local)
      : JSON.stringify(val[process.env["DFX_NETWORK"] || ""] || ""),
  }),
  {},
)

console.log(">> ", { canisterEnv })

isDev &&
  shell.exec("./scripts/replace-env.sh", {
    env: BACKEND_CANISTER.reduce(
      (acc, key) => ({
        ...acc,
        [`${key.toUpperCase()}_CANISTER_ID`]: JSON.parse(
          canisterEnv[`process.env.${key.toUpperCase()}_CANISTER_ID`],
        ),
      }),
      {},
    ),
  })

const LOCAL_CANISTER = [...BACKEND_CANISTER, "nfid_frontend"]

if (process.env.FILTER_DEV_CANISTER === "true") {
  const DEV_DFX_CONF = require(`../${DFX_JSON_PATH}`)
  console.log(">> ", { DEV_DFX_CONF })

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
