// jest.setup.ts
import '@testing-library/jest-dom'

// https://stackoverflow.com/questions/68468203/why-am-i-getting-textencoder-is-not-definedin-jest
import { TextEncoder } from 'util'
global.TextEncoder = TextEncoder
