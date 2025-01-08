import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'School Pulse/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: { isSidebarOpen: { control: 'boolean' } }
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Base: Story = {
  args: {
    isSidebarOpen: false
  },
  render: (args) => (
    <ChakraProvider value={defaultSystem}>
      <Sidebar />
    </ChakraProvider>
  )
}
