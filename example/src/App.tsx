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
    <InternetIdentityProvider>
      <AuthButthon />
    </InternetIdentityProvider>
  )
}

export default App
