import React from 'react'
import { Button } from 'src/ui-lib/atoms/button'
import { useInternetIdentity } from '@internet-identity-labs/react-ic-ii-auth'
import { Modal } from 'src/ui-lib/molecules/modal'
import { InternetIdentityIframe } from './internet-identity-auth'

import { ModalHeader } from './modal/header'

interface InternetAuthProps {
  onClick?: () => void
}

export const InternetAuthButton: React.FC<InternetAuthProps> = ({
  onClick
} = {}) => {
  const [showModal, setShowModal] = React.useState(false)
  const { isAuthenticated, identityProvider, authenticate } =
    useInternetIdentity()

  const handleAuthModal = React.useCallback(() => {
    setShowModal(true)
    onClick && onClick()
  }, [onClick])

  const handleAuthentication = React.useCallback(async () => {
    try {
      await authenticate()
    } catch {
      console.error('something happened')
    }
  }, [authenticate])

  React.useEffect(() => {
    isAuthenticated && setShowModal(false)
  }, [isAuthenticated])

  return (
    <>
      <Button onClick={handleAuthModal}>Login Modal</Button>
      <Button onClick={handleAuthentication}>Login Tab</Button>
      {showModal && (
        <Modal
          className='md:min-w-[650px]'
          title='Login'
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <ModalHeader onClose={() => setShowModal(false)} />
          <InternetIdentityIframe
            internetIdentityProvider={identityProvider}
            onLoad={handleAuthentication}
          />
        </Modal>
      )}
    </>
  )
}
