import React from "react"

import { IFrame } from "@identity-labs/nfid-sdk-react"
import { Intro } from "./Intro"
import { Auth } from "./nfid-integration/Auth"

function App() {
  return (
    <div className="App">
      <Auth />
      <Intro />
    </div>
  )
}

export default App
