import ii from "../assets/dfinity.svg"
import nfid from "../assets/nfid-logo.svg"
import { useInternetIdentity } from "@internet-identity-labs/react-ic-ii-auth"
import React from "react"
import { counter } from "canisters/counter"

const ProvidersLogos: { [key: string]: string } = {
  NFID: nfid,
  II: ii,
}

interface IAuthButton {
  provider: string
  reset: () => void
}

export const AuthButton = ({ provider, reset }: IAuthButton) => {
  const { signout, authenticate, isAuthenticated, identity } = useInternetIdentity()

  const handleWhoami = React.useCallback(async () => {
    const reponse = await counter.whoami()
    console.log(">> ", { reponse })
  }, [])

  const signOut = () => {
    signout()
    reset()
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={authenticate} className="auth-button">
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
