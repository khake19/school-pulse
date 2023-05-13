import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'School Pulse/Header',
  component: Header,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Header>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

const schools = [
  { id: '1', name: 'Aroroy East Central School' },
  { id: '2', name: 'Balawing Elementary School' },
  { id: '3', name: 'Balete Elementary School' },
  { id: '4', name: 'Bienvinido R. Bulalacao Memorial Elementary School' },
  { id: '5', name: 'Cabangcalan Elementary School' },
  { id: '6', name: 'Capsay Elementary School' },
  { id: '7', name: 'Concepcion Elementary School' },
  { id: '8', name: 'Lanang Elementary School' },
  { id: '9', name: 'Luy-a Elementary School' },
  { id: '10', name: 'Malubi Elementary School' },
  { id: '11', name: 'Managanaga Elementary School' }
]
export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Header schools={schools} />
    </ChakraProvider>
  )
}
