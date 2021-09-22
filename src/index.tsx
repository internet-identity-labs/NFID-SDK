/* eslint-disable no-unused-vars */
import { Identity } from '@dfinity/agent'
import { AuthClient, AuthClientLoginOptions } from '@dfinity/auth-client'
import React from 'react'

interface InternetIdentityContextState {
  error: string | null
  isAuthenticated: boolean
  principleId: Identity | null
  authenticate: () => void
  signout: () => void
}

export const InternetIdentityContext =
  React.createContext<InternetIdentityContextState>({
    error: null,
    isAuthenticated: false,
    principleId: null,
    authenticate: () => {},
    signout: () => {}
  })

interface UseInternetIdentityProps {
  authClientOptions?: AuthClientLoginOptions
}

export const useInternetIdentity = ({
  authClientOptions = {}
}: UseInternetIdentityProps = {}) => {
  const [authClient, setAuthClient] = React.useState<AuthClient | null>(null)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [principleId, setPrincipalId] = React.useState<Identity | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const createAuthClient = React.useCallback(async () => {
    const authClient = await AuthClient.create()
    setAuthClient(authClient)
  }, [])

  React.useEffect(() => {
    createAuthClient()
  }, [createAuthClient])

  const setAuthStatus = React.useCallback(async (authClient) => {
    if (authClient) {
      const isAuthenticated = await authClient.isAuthenticated()
      return setIsAuthenticated(isAuthenticated)
    }
    return setIsAuthenticated(false)
  }, [])

  React.useEffect(() => {
    authClient && setAuthStatus(authClient)
  }, [authClient, setAuthStatus, principleId])

  const getIdentity = React.useCallback(() => {
    if (authClient) {
      const identity = authClient.getIdentity()
      setPrincipalId(identity)
    }
  }, [authClient])

  React.useEffect(() => {
    isAuthenticated ? getIdentity() : setPrincipalId(null)
  }, [getIdentity, isAuthenticated])

  const handleError = React.useCallback((error) => {
    setError(error)
  }, [])

  const authenticate = React.useCallback(async () => {
    if (authClient) {
      await authClient.login({
        onSuccess: getIdentity,
        onError: handleError,
        identityProvider: 'https://identity.ic0.app/#authorize',
        ...authClientOptions
      })
    }
  }, [authClient, getIdentity, handleError])

  const signout = React.useCallback(async () => {
    if (authClient) {
      await authClient.logout()
      setPrincipalId(null)
    }
  }, [authClient])

  return { error, isAuthenticated, principleId, authenticate, signout }
}

interface InternetIdentityProviderProps {
  authClientOptions?: AuthClientLoginOptions
}

export const InternetIdentityProvider: React.FC<InternetIdentityProviderProps> =
  ({ children, authClientOptions = {} }) => {
    const { error, isAuthenticated, principleId, authenticate, signout } =
      useInternetIdentity({ authClientOptions })
    return (
      <InternetIdentityContext.Provider
        value={{ error, isAuthenticated, principleId, authenticate, signout }}
      >
        {children}
      </InternetIdentityContext.Provider>
    )
  }
