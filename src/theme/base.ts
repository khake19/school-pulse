import '@fontsource/roboto'
import '@fontsource/inter'

export const fonts = { heading: `'Roboto', sans-serif`, body: `'Inter', sans-serif` }

export const colors = {
  // Official color palette
  primary: '#B9EDDD', // coral
  secondary: '', // ocean
  tertiary: '',
  ancillary: '',

  //https://colorhunt.co/palette/0a26471442722052952c74b3
  brand: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795'
  },

  // Complimentary
  orange: '',
  gold: '',
  green: '',
  seafoam: '',
  purple: '',
  ultraviolet: '',

  // Monochrome
  lightest: '',
  lighter: '',
  light: '',
  mediumlight: '',
  medium: '',
  mediumdark: '',
  dark: '',
  darker: '',
  darkest: '',

  // For borders
  border: 'hsla(203, 50%, 30%, 0.15)',

  // Status
  positive: '',
  negative: '',
  warning: '',
  critical: '',

  // Text
  defaultText: '',
  inverseText: '',
  positiveText: '',
  negativeText: '',
  warningText: ''
}

export const background = {}

export const typography = {
  weight: {
    regular: 400,
    bolod: 700
  },
  size: {}
}

export const components = {
  Button: {
    baseStyle: {
      borderRadius: 'none'
    }
  },
  Text: {
    baseStyle: {
      fontSize: 'sm'
    }
  }
}

export const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px'
}
