import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Layout from '~/components/Layout'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
