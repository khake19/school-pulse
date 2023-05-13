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

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}
