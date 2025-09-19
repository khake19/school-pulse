import { render } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Header from './Header'

jest.mock('./SchoolsMenu', () => {
  return function MockSchoolsMenu() {
    return <div>Schools Menu</div>
  }
})

jest.mock('./AccountMenu', () => {
  return function MockAccountMenu() {
    return <div>Account Menu</div>
  }
})

describe('Header', () => {
  it('renders the header with schools and account menu', () => {
    const { getByText } = render(
      <ChakraProvider value={defaultSystem}>
        <Header />
      </ChakraProvider>
    )

    expect(getByText('Schools Menu')).toBeInTheDocument()
    expect(getByText('Account Menu')).toBeInTheDocument()
  })
})
