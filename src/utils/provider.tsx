'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(new QueryClient())

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Providers
