import ii from "../assets/dfinity.svg"
import nfid from "../assets/nfid-logo.svg"
import { AuthIFrame } from "./AuthIFrame"
import { useInternetIdentity } from "@identity-labs/react-ic-ii-auth"
import React from "react"
import { counter } from "canisters/counter"

const ProvidersLogos: { [key: string]: string } = {
  NFID: nfid,
  II: ii,
}

interface IAuthButton {
  provider: string
  reset: () => void
  iframeMode: boolean
}

export const AuthButton = ({ provider, reset, iframeMode }: IAuthButton) => {
  const { signout, authenticate, isAuthenticated, identity, identityProvider } =
    useInternetIdentity()
  const [isIframeOpened, setIsIframeOpened] = React.useState(false)

  const signIn = () => {
    if (provider === "NFID" && iframeMode) setIsIframeOpened(true)
    else authenticate()
  }

  const handleWhoami = React.useCallback(async () => {
    const reponse = await counter.whoami()
    console.log(">> ", { reponse })
  }, [])

  const signOut = () => {
    signout()
    reset()
  }

  React.useEffect(() => {
    if (iframeMode) setIsIframeOpened(true)
  }, [iframeMode])

  return (
    <div>
      {!isAuthenticated && isIframeOpened && (
        <AuthIFrame
          identityProvider={identityProvider}
          handler={authenticate}
          onClose={() => setIsIframeOpened(false)}
        />
      )}
      {!isAuthenticated ? (
        <button onClick={signIn} className="auth-button">
          Sign in with
          <img src={ProvidersLogos[provider]} alt="" />
        </button>
      ) : (
        <div className="signout">
          <span>
            <strong>Signed in as: </strong>
            {identity?.getPrincipal().toText()}
          </span>
          <button onClick={signOut} className="auth-button">
            Sign out
          </button>
          <button onClick={handleWhoami} className="auth-button">
            Call whoami
          </button>
        </div>
      )}
    </div>
  )
}
