# react-ic-ii-auth

> React components to use DFINITY Internet Identity Authentication

[![NPM](https://img.shields.io/npm/v/react-ic-ii-auth.svg)](https://www.npmjs.com/package/@bendcircular/react-ic-ii-auth) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ic-ii-auth
```

## Usage

```tsx
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
```

## License

MIT © [plitzenberger](https://github.com/plitzenberger)
