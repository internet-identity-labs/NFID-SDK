import { AuthButton } from "./AuthButton"
import { ToggleMode } from "./ToggleMode"
import { InternetIdentityProvider } from "@identity-labs/react-ic-ii-auth"
import React from "react"

// Note: This is just a basic example to get you started
function Auth() {
  const [provider, setProvider] = React.useState<"II" | "NFID" | null>(null)
  const [isIframeMode, setIsIframeMode] = React.useState(false)

  const NFIDUrl = React.useMemo(() => {
    return !isIframeMode
      ? process.env.REACT_APP_NFID_PROVIDER_URL
      : process.env.REACT_APP_NFID_PROVIDER_IFRAME_URL
  }, [isIframeMode])

  return (
    <div>
      <ToggleMode
        isIframeMode={isIframeMode}
        setIsIframeMode={setIsIframeMode}
      />
      <div className="auth-section">
        {!provider || provider === "II" ? (
          <InternetIdentityProvider
            authClientOptions={{
              maxTimeToLive: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1e9),
              identityProvider: "https://identity.ic0.app/#authorize",
              windowOpenerFeatures: `toolbar=0,location=0,menubar=0,width=400,height=600,left=${
                window.screen.width / 2 - 200
              }, top=${window.screen.height / 2 - 300}`,
              onSuccess: (principal) => {
                setProvider("II")
              },
            }}
          >
            <AuthButton
              iframeMode={false}
              reset={() => setProvider(null)}
              provider="II"
            />
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
            <AuthButton
              iframeMode={isIframeMode}
              reset={() => setProvider(null)}
              provider="NFID"
            />
          </InternetIdentityProvider>
        ) : null}
      </div>
    </div>
  )
}

export { Auth }
