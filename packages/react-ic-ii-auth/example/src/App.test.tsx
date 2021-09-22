import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from './App'

it('renders without crashing', async () => {
  const { getByText } = render(<App />)

  await waitFor(() => {
    expect(getByText('Login')).toBeDefined()
  })
})
