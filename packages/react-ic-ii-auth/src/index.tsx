/* eslint-disable no-unused-vars */
import { Identity } from '@dfinity/agent'
import { AuthClient, AuthClientLoginOptions } from '@dfinity/auth-client'
import React from 'react'

interface InternetIdentityContextState {
  error: string | null
  isAuthenticated: boolean
  identity: Identity | null
  authenticate: () => void
  signout: () => void
}

export const InternetIdentityContext =
  React.createContext<InternetIdentityContextState>({
    error: null,
    isAuthenticated: false,
    identity: null,
    authenticate: () => {},
    signout: () => {}
  })

interface AuthClientOptions extends Omit<AuthClientLoginOptions, 'onSuccess'> {
  onSuccess?: (identity: Identity) => void
}

interface UseInternetIdentityProps {
  authClientOptions?: AuthClientOptions
}

export const useInternetIdentity = ({
  authClientOptions: { onError, onSuccess, ...authClientOptions } = {}
}: UseInternetIdentityProps = {}) => {
  const [authClient, setAuthClient] = React.useState<AuthClient | null>(null)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [identity, setIdentity] = React.useState<Identity | null>(null)
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
  }, [authClient, setAuthStatus, identity])

  const handleOnSuccess = React.useCallback((authClient) => {
    onSuccess && onSuccess(authClient.getIdentity())
  }, [])

  const handleOnError = React.useCallback((error) => {
    setError(error)
    onError && onError(error)
  }, [])

  const authenticate = React.useCallback(async () => {
    if (authClient) {
      await authClient.login({
        onSuccess: () => handleOnSuccess(authClient),
        onError: handleOnError,
        identityProvider: 'https://identity.ic0.app/#authorize',
        ...authClientOptions
      })
    }
  }, [authClient, handleOnError])

  const signout = React.useCallback(async () => {
    if (authClient) {
      await authClient.logout()
      setIdentity(null)
    }
  }, [authClient])

  return {
    error,
    isAuthenticated,
    identity: authClient ? authClient.getIdentity() : null,
    authenticate,
    signout
  }
}

interface InternetIdentityProviderProps {
  authClientOptions?: AuthClientLoginOptions
}

export const InternetIdentityProvider: React.FC<InternetIdentityProviderProps> =
  ({ children, authClientOptions = {} }) => {
    const { error, isAuthenticated, identity, authenticate, signout } =
      useInternetIdentity({ authClientOptions })
    return (
      <InternetIdentityContext.Provider
        value={{ error, isAuthenticated, identity, authenticate, signout }}
      >
        {children}
      </InternetIdentityContext.Provider>
    )
  }
