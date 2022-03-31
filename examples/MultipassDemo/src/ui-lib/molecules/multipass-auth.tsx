import { useInternetIdentity } from "@identity-labs/react-ic-ii-auth"
import { IFrame } from "@identity-labs/nfid-sdk-react"
import React from "react"

interface InternetAuthProps {}

export const MultipassAuth: React.FC<InternetAuthProps> = () => {
  const [calledAuth, setCalledAuth] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const { isAuthenticated, identityProvider, authenticate } =
    useInternetIdentity()

  const handleAuthentication = React.useCallback(async () => {
    try {
      if (!calledAuth) {
        authenticate()
        setCalledAuth(true)
      }
    } catch {
      console.error("something happened")
    }
  }, [authenticate, calledAuth])

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowModal(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  React.useEffect(() => {
    isAuthenticated && setShowModal(false)
  }, [isAuthenticated])

  return showModal ? (
    // Uses our default IFrame component with built in components
    <IFrame src={identityProvider} onLoad={handleAuthentication} />
  ) : null
}
