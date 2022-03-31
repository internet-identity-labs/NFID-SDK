import { useInternetIdentity } from "@identity-labs/react-ic-ii-auth"
import { Button } from "@identity-labs/nfid-sdk-react"
import React from "react"

interface InternetAuthProps {}

export const IIAuth: React.FC<InternetAuthProps> = () => {
  const { authenticate } = useInternetIdentity()

  const handleAuthenticate = React.useCallback(async () => {
    await authenticate()
  }, [authenticate])

  return (
    <Button onClick={handleAuthenticate} secondary>
      Login with II
    </Button>
  )
}
