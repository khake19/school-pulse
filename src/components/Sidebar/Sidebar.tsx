import React from 'react'
import Image from 'next/image'
import { Avatar, Divider, Heading, Flex, Text } from '@chakra-ui/react'
import SidebarStyle from './Sidebar.style'
import Item from './Item'

interface SidebarProps {
  isSidebarOpen: boolean
  setSideBarOpen: (isSidebarOpen: boolean) => void
}

const Sidebar = (props: SidebarProps) => {
  const { isSidebarOpen, setSideBarOpen } = props

  return (
    <Flex css={SidebarStyle.sidebar} width={isSidebarOpen ? '75px' : '180px'}>
      <Flex flexDir="column" alignItems={isSidebarOpen ? 'center' : 'flex-start'} as="nav">
        <Flex mt={5} flexDir="column" w="100%" alignItems={isSidebarOpen ? 'center' : 'flex-start'} p="15px 10px">
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
        <Item icon="calendar" title="Leaves" name="leaves" href="/leaves" isSidebarOpen={isSidebarOpen} />
      </Flex>
      <Flex css={SidebarStyle.avatar} alignItems={isSidebarOpen ? 'center' : 'flex-start'}>
        <Divider display={isSidebarOpen ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="/profile-picture.jpeg" />
          <Flex flexDir="column" ml={4} display={isSidebarOpen ? 'none' : 'flex'}>
            <Heading as="h3" size="sm" color="green.700">
              Kerk Jazul
            </Heading>
            <Text color="gray.400" fontSize="14px">
              Admin
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sidebar
