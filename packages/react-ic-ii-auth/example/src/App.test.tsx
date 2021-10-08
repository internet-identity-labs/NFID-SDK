import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from '../pages'

jest.mock('.dfx/local/canisters/profile/index.js', () => ({
  createActor: jest.fn()
}))
jest.mock('src/ic-utils/create-actor', () => ({
  createActor: jest.fn()
}))

test('renders learn react link', async () => {
  const { getByText } = render(<App />)

  await waitFor(() => {
    expect(getByText(/TRY IT NOW!/i)).toBeInTheDocument()
  })
})
