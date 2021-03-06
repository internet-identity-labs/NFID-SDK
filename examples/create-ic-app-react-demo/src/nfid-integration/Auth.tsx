import { AuthButton } from "./AuthButton"
import { InternetIdentityProvider } from "@internet-identity-labs/react-ic-ii-auth"
import React from "react"

const NFIDUrl = process.env.REACT_APP_NFID_PROVIDER_URL

// Note: This is just a basic example to get you started
function Auth() {
  const [provider, setProvider] = React.useState<"II" | "NFID" | null>(null)

  return (
    <div>
      <div className="auth-section">
        {!provider || provider === "II" ? (
          <InternetIdentityProvider
            authClientOptions={{
              maxTimeToLive: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1e9),
              identityProvider:
                "https://wookt-ayaaa-aaaaj-addwq-cai.ic0.app/#authorize",
              windowOpenerFeatures: `toolbar=0,location=0,menubar=0,width=400,height=600,left=${
                window.screen.width / 2 - 200
              }, top=${window.screen.height / 2 - 300}`,
              onSuccess: (principal) => {
                setProvider("II")
              },
            }}
          >
            <AuthButton reset={() => setProvider(null)} provider="II" />
          </InternetIdentityProvider>
        ) : null}
        {!provider || provider === "NFID" ? (
          <InternetIdentityProvider
            authClientOptions={{
              maxTimeToLive: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1e9),
              identityProvider: NFIDUrl as string,
              windowOpenerFeatures: `toolbar=0,location=0,menubar=0,width=400,height=600,left=${
                window.screen.width / 2 - 200
              }, top=${window.screen.height / 2 - 300}`,
              onSuccess: (principal) => {
                setProvider("NFID")
              },
            }}
          >
            <AuthButton reset={() => setProvider(null)} provider="NFID" />
          </InternetIdentityProvider>
        ) : null}
      </div>
    </div>
  )
}

export { Auth }
