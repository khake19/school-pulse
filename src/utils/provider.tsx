'use client'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { PhotoProvider } from 'react-photo-view'
import theme from '../theme'

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import 'react-photo-view/dist/react-photo-view.css'

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(new QueryClient())

  return (
    <ChakraProvider value={theme}>
      <QueryClientProvider client={client}>
        <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Providers
