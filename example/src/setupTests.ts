// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

// https://stackoverflow.com/questions/68468203/why-am-i-getting-textencoder-is-not-definedin-jest
import { TextEncoder } from 'util'
global.TextEncoder = TextEncoder
