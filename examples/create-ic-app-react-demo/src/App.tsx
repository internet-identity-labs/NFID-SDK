import { Intro } from "./Intro"
import { Auth } from "./nfid-integration/Auth"
import React from "react"

console.log(">> ", {
  COUNTER_CANISTER_ID: process.env.COUNTER_CANISTER_ID,
  GIT_VERSION: process.env.GIT_VERSION,
})

function App() {
  return (
    <div className="App">
      <Auth />
      <Intro />
    </div>
  )
}

export default App
