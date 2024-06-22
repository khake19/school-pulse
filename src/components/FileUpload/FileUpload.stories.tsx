import type { Meta, StoryObj } from '@storybook/react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

import FileUpload from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'School Pulse/File Upload',
  component: FileUpload,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof FileUpload>

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <FileUpload />
    </ChakraProvider>
  )
}
