import { createSystem, defaultConfig } from '@chakra-ui/react'

import { fonts, fontSizes, brand } from '~/theme/base'

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: fonts,
      fontSizes: fontSizes,
      colors: {
        brand
      }
    },
    semanticTokens: {
      colors: {
        button: {
          danger: { value: '{colors.red.500}' },
          success: { value: '{colors.teal.500}' }
        }
      }
    }
  }
})

export default theme
