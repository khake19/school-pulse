import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Calendar from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'School Pulse/Calendar',
  component: Calendar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Calendar>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export const Base: Story = {
  render: () => <ChakraProvider theme={theme}>{/* <Calendar /> */}</ChakraProvider>
}
