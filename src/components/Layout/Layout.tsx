'use client'

import { Flex } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
interface ILayoutProps {
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children } = props

  return (
    <Flex direction="column" align="stretch" justify="flex-start" minHeight="100dvh">
      <Header />
      <Flex direction="row" align="stretch" justify="flex-start" flex="1" bg="#F9F9F9">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
