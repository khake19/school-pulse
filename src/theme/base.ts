import '@fontsource/roboto'
import '@fontsource/inter'

export const fonts = { heading: { value: `'Roboto', sans-serif` }, body: { value: `'Inter', sans-serif` } }

export const colors = {
  // Official color palette
  primary: '#B9EDDD', // coral
  secondary: '#87CBB9', // ocean
  tertiary: '',
  ancillary: '',

  //https://colorhunt.co/palette/0a26471442722052952c74b3

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
    bold: 700
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
  xs: { value: '10px' },
  sm: { value: '12px' },
  md: { value: '14px' },
  lg: { value: '16px' },
  xl: { value: '18px' },
  '2xl': { value: '24px' },
  '3xl': { value: '28px' },
  '4xl': { value: '36px' },
  '5xl': { value: '48px' },
  '6xl': { value: '64px' }
}

export const brand = {
  50: { value: '#E6FFFA' },
  100: { value: '#B2F5EA' },
  200: { value: '#81E6D9' },
  300: { value: '#4FD1C5' },
  400: { value: '#38B2AC' },
  500: { value: '#319795' },
  600: { value: '#319795' },
  700: { value: '#319795' },
  800: { value: '#319795' },
  900: { value: '#319795' }
}
