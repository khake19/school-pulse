'use client'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Layout from '~/components/Layout'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ChakraProvider theme={theme}>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  )
}
