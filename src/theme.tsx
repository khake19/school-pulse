import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace`, heading: `'Open Sans', sans-serif`, body: `'Raleway', sans-serif` }

const theme = extendTheme({
  fonts
})

export default theme
