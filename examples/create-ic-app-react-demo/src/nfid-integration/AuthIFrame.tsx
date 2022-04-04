import useClickOutside from "../hooks/useClickOutside"
import { IFrame } from "@internet-identity-labs/nfid-sdk-react"
import React from "react"

interface IAuthFrame {
  identityProvider: string
  handler: () => void
  onClose: () => void
}
export const AuthIFrame = ({
  identityProvider,
  handler,
  onClose,
}: IAuthFrame) => {
  const iframeRef = useClickOutside(onClose)
  const [calledAuth, setCalledAuth] = React.useState(false)
  const handleCallOnce = React.useCallback(async () => {
    if (!calledAuth) {
      handler()
      setCalledAuth(true)
    }
  }, [calledAuth, handler])

  return (
    <div ref={iframeRef}>
      <IFrame
        className="right-0 shadow-lg sm:right-4 top-4 iframe"
        src={identityProvider}
        onLoad={handleCallOnce}
      />
    </div>
  )
}
