import { extendTheme } from '@chakra-ui/react'
import { colors } from '~/theme/base'

const fonts = { mono: `'Menlo', monospace`, heading: `'Open Sans', sans-serif`, body: `'Raleway', sans-serif` }

const theme = extendTheme({
  colors,
  fonts
})

export default theme
