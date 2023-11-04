import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'School Pulse/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: { isSidebarOpen: { control: 'boolean' } }
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
  render: (args) => (
    <ChakraProvider theme={theme}>
      <Sidebar {...args} setSideBarOpen={() => {}} />
    </ChakraProvider>
  )
}
