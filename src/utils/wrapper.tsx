'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const wrapper = () => {
  const client = new QueryClient()

  return ({ children }: React.PropsWithChildren) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}

export default wrapper
