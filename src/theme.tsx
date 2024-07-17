import { extendTheme } from '@chakra-ui/react'
import { colors, components, fontSizes } from '~/theme/base'
import '@fontsource/roboto'
import '@fontsource/inter'

const fonts = { heading: `'Roboto', sans-serif`, body: `'Inter', sans-serif` }

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  components
})

export default theme
