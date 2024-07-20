'use client'

import { Flex } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
import useGetSchools from '../../app/schools/hooks/useSchool'
import usePreference from '~/stores/navigation/usePreference'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children } = props

  const { schools } = useGetSchools()

  const { isSidebarOpen, setSideBarOpen } = usePreference()
  return (
    <Flex direction="column" align="stretch" justify="flex-start" minHeight="100dvh">
      <Header schools={schools} />
      <Flex direction="row" align="stretch" justify="flex-start" flex="1" bg="#F9F9F9">
        <Sidebar isSidebarOpen={isSidebarOpen} setSideBarOpen={setSideBarOpen} />
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
