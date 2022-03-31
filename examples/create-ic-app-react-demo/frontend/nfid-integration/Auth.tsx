import { InternetIdentityProvider } from "@identity-labs/react-ic-ii-auth"
import React from "react"

import { AuthButton } from "./AuthButton"
import { ToggleMode } from "./ToggleMode"

// Note: This is just a basic example to get you started
function Auth() {
  const [provider, setProvider] = React.useState<"II" | "NFID" | null>(null)
  const [isIframeMode, setIsIframeMode] = React.useState(false)

  const NFIDUrl = React.useMemo(() => {
    return !isIframeMode
      ? import.meta.env.VITE_NFID_PROVIDER_URL
      : import.meta.env.VITE_NFID_PROVIDER_IFRAME_URL
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
              onSuccess: (principal) => {
                setProvider("II")
              },
              opener: () =>
                window.open(
                  "https://identity.ic0.app/#authorize".toString(),
                  "idpWindow",
                  `toolbar=0,location=0,menubar=0, width=400, height=600, left=${
                    window.screen.width / 2 - 200
                  }, top=${window.screen.height / 2 - 300}`,
                ),
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
              onSuccess: (principal) => {
                setProvider("NFID")
              },
              opener: () =>
                window.open(
                  NFIDUrl as string,
                  "idpWindow",
                  `toolbar=0,location=0,menubar=0, width=400, height=600, left=${
                    window.screen.width / 2 - 200
                  }, top=${window.screen.height / 2 - 300}`,
                ),
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
