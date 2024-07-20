import { extendTheme } from '@chakra-ui/react'
import { colors, components, fonts, fontSizes } from '~/theme/base'

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  components
})

export default theme
