import { createSystem, defaultConfig } from '@chakra-ui/react'

import { fonts, fontSizes } from '~/theme/base'

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: fonts,
      fontSizes: fontSizes
    }
  }
})

export default theme
