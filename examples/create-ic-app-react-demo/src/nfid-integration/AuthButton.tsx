import ii from "../assets/dfinity.svg"
import nfid from "../assets/nfid-logo.svg"
import { useInternetIdentity } from "@internet-identity-labs/react-ic-ii-auth"

const ProvidersLogos: { [key: string]: string } = {
  NFID: nfid,
  II: ii,
}

interface IAuthButton {
  provider: string
  label?: string
  reset: () => void
}

export const AuthButton = ({ provider, label, reset }: IAuthButton) => {
  const { signout, authenticate, isAuthenticated, identity } =
    useInternetIdentity()

  const signOut = () => {
    signout()
    reset()
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={authenticate} className="auth-button">
          Sign in with{label ? ` (${label})` : ""}
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
        </div>
      )}
    </div>
  )
}
