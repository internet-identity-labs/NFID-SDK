import React from 'react'

import { InternetIdentityProvider, useInternetIdentity } from 'react-ic-ii-auth'

const AuthButthon = () => {
  const { authenticate, isAuthenticated } = useInternetIdentity()
  return (
    <button onClick={authenticate}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  )
}

const OtherComponent = () => {
  const { identity } = useInternetIdentity()
  return <div>OtherComponent: {JSON.stringify(identity)}</div>
}

const App = () => {
  return (
    <InternetIdentityProvider
      authClientOptions={{
        onSuccess: (identity) =>
          console.log('>> init actors with', { identity }),
        identityProvider: `http://${process.env.II_CANISTER_ID}.localhost:8000/#authorize`
      }}
    >
      <AuthButthon />
      <OtherComponent />
    </InternetIdentityProvider>
  )
}

export default App
