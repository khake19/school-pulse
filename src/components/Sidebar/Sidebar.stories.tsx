import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Sidebar',
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

export const Large: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <Sidebar />
    </ChakraProvider>
  )
}
