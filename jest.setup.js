// Polyfill for structuredClone in Node.js < 17
if (!global.structuredClone) {
  global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj))
}

// Setup testing utilities
import '@testing-library/jest-dom'
