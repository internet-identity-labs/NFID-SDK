import React from 'react'
import {
  InternetIdentityProvider,
  useInternetIdentity
} from '@identity-labs/react-ic-ii-auth'

import { InternetAuthButton } from 'src/ui-lib/molecules/login'
import { useProfile } from 'src/ic-utils/profile'
import { H1 } from 'src/ui-lib/atoms/headlines'
import { Navigation } from 'src/ui-lib/organisms/navigation'

// eslint-disable-next-line no-unused-vars
import { Principal } from '@dfinity/principal'
import { Button } from 'src/ui-lib/atoms/button'
import clsx from 'clsx'

const AuthComponent = () => {
  const [iam, setIam] = React.useState('')
  const { identity, isAuthenticated, signout } = useInternetIdentity()

  const { whoami } = useProfile({ identity })

  const handleWhoami = React.useCallback(async () => {
    const response = await whoami()
    setIam((response as Principal).toString())
  }, [whoami])

  return isAuthenticated ? (
    <>
      {!iam ? (
        <>
          <Button onClick={handleWhoami}>whoami</Button>
          <Button onClick={signout}>signout</Button>
        </>
      ) : (
        <div className={clsx('flex flex-col')}>
          <div className={clsx('font-bold mb-2')}>your identity is:</div>
          <div className={clsx('mb-6')}>{iam}</div>
          <div className={clsx('flex flex-col')}>
            <Button onClick={signout}>signout</Button>
            <Button className='mt-2' onClick={() => setIam('')}>
              clear
            </Button>
          </div>
        </div>
      )}
    </>
  ) : (
    <InternetAuthButton />
  )
}

function App() {
  return (
    <InternetIdentityProvider
      authClientOptions={{
        identityProvider: process.env.NEXT_PUBLIC_II_CANISTER_URL,
        onSuccess: (principal) => {
          console.log('>> onSuccess', { principal })
        }
      }}
    >
      <div className='h-screen w-full bg-gradient-to-br from-blue-500 to-yellow-500'>
        <Navigation />
        <div className='p-8 pt-20 md:p-8 md:w-8/12 md:m-auto md:pt-32 lg:pt-48 2xl:max-w-7xl'>
          <H1 className='py-8'>Auth plugin for IC Internet Identity</H1>

          <div className='pt-8'>
            <AuthComponent />
          </div>
        </div>
      </div>
    </InternetIdentityProvider>
  )
}

export default App
