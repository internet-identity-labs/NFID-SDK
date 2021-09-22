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

const App = () => {
  return (
    <InternetIdentityProvider
      authClientOptions={{
        identityProvider: `http://${process.env.II_CANISTER_ID}.localhost:8000/#authorize`
      }}
    >
      <AuthButthon />
    </InternetIdentityProvider>
  )
}

export default App
