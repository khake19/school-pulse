import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Table from './Table'

const meta: Meta<typeof Table> = {
  title: 'School Pulse/Table',
  component: Table,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Table>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Table />
    </ChakraProvider>
  )
}
