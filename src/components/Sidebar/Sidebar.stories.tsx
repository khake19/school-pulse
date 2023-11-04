import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'School Pulse/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Sidebar>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Sidebar isSidebarOpen={false} setSideBarOpen={() => {}} />
    </ChakraProvider>
  )
}

export const Close: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Sidebar isSidebarOpen={true} setSideBarOpen={() => {}} />
    </ChakraProvider>
  )
}
