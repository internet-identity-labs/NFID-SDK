import React from 'react'
import { Button } from 'src/ui-lib/atoms/button'
import { useInternetIdentity } from '@bendcircular/react-ic-ii-auth'
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
  const { isAuthenticated, identityProvider, authenticate, signout } =
    useInternetIdentity()

  const handleLogIn = React.useCallback(() => {
    isAuthenticated ? signout() : setShowModal(true)
    onClick && onClick()
  }, [isAuthenticated, onClick, signout])

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
      <Button onClick={handleLogIn}>
        {isAuthenticated ? 'Sign out' : 'Login'}
      </Button>
      {showModal && (
        <Modal
          className='md:min-w-[650px]'
          title='Login'
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          onModalMounted={handleAuthentication}
        >
          <ModalHeader onClose={() => setShowModal(false)} />
          <InternetIdentityIframe internetIdentityProvider={identityProvider} />
        </Modal>
      )}
    </>
  )
}
