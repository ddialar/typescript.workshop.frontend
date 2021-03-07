import { render, screen } from '@testing-library/react'
import { App } from './App'

// TODO Implement Cypres and create the integration testing suites.
test.skip('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Social Media Empty Page/i)
  expect(linkElement).toBeInTheDocument()
})
