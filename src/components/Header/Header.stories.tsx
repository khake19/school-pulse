import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'School Pulse/Header',
  component: Header,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Header>

export const Base: Story = {
  render: () => (
    <ChakraProvider value={defaultSystem}>
      <Header />
    </ChakraProvider>
  )
}
