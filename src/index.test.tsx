import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { InternetIdentityProvider, useInternetIdentity } from '.'

const AuthButton = () => {
  const { authenticate, signout, isAuthenticated } = useInternetIdentity()
  return (
    <button onClick={isAuthenticated ? signout : authenticate}>
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  )
}

const Sample = () => {
  return (
    <InternetIdentityProvider>
      <AuthButton />
    </InternetIdentityProvider>
  )
}

it('renders without crashing', async () => {
  const { getByText } = render(<Sample />)
  await waitFor(() => {
    expect(getByText('Log in')).toBeDefined()
  })
})
