import React from 'react'
import Image from 'next/image'
import { Flex } from '@chakra-ui/react'
import Item from './Item'
import usePreference from '~/stores/navigation/usePreference'
import { sidebar } from './Sidebar.style'

const Sidebar = () => {
  const { isSidebarOpen, setSideBarOpen } = usePreference()

  return (
    <Flex css={sidebar} width={isSidebarOpen ? '180px' : '75px'}>
      <Flex flexDir="column" alignItems={isSidebarOpen ? 'center' : 'flex-start'} as="nav">
        <Flex mt={5} flexDir="column" w="100%" alignItems={isSidebarOpen ? 'flex-start' : 'center'} p="15px 10px">
          <Image
            alt="menu"
            src="/icons/menu.svg"
            width={21}
            height={0}
            onClick={() => setSideBarOpen(!isSidebarOpen)}
          />
        </Flex>
        <Item icon="home" title="Dashboard" href="" isSidebarOpen={isSidebarOpen} />
        <Item icon="bar-chart-2" title="Report" href="/reports" isSidebarOpen={isSidebarOpen} />
        <Item icon="file" title="Documents" name="/documents" href="/documents" isSidebarOpen={isSidebarOpen} />
        <Item icon="users" title="Teachers" name="/teachers" href="/teachers" isSidebarOpen={isSidebarOpen} />
      </Flex>
    </Flex>
  )
}

export default Sidebar
