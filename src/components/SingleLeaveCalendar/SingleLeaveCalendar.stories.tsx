import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import SingleLeaveCalendar from './SingleLeaveCalendar'

const meta: Meta<typeof SingleLeaveCalendar> = {
  title: 'School Pulse/Single Leave Calendar',
  component: SingleLeaveCalendar,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SingleLeaveCalendar>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <SingleLeaveCalendar />
    </ChakraProvider>
  )
}
