import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import Calendar from './Calendar'
import { useCallback } from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'School Pulse/Calendar',
  component: Calendar,
  tags: ['autodocs']
}

const events = [
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2025, 1, 7),
    end: new Date(2025, 1, 10)
  }
]

export default meta
type Story = StoryObj<typeof Calendar>

export const Base: Story = {
  render: () => (
    <ChakraProvider value={defaultSystem}>
      <Calendar events={events} />
    </ChakraProvider>
  )
}
