'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(new QueryClient())

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Providers
