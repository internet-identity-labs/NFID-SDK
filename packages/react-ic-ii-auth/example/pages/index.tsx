import React from 'react'
import { InternetIdentityProvider } from '@internet-identity-labs/react-ic-ii-auth'

import { H1 } from 'src/ui-lib/atoms/headlines'
import { Navigation } from 'src/ui-lib/organisms/navigation'

import { AuthComponent } from 'src/components/auth-component'

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
