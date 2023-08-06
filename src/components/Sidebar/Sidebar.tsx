import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, Divider, Heading, Flex, Text } from '@chakra-ui/react'
import SidebarStyle from './Sidebar.style'
import Item from './Item'

const Sidebar = () => {
  const [navSize, changeNavSize] = useState<string>('large')

  return (
    <Flex
      css={SidebarStyle.sidebar}
      width={navSize === 'small' ? '75px' : '180px'}
      borderRadius={navSize === 'small' ? '0 15px 15px 0' : '0 30px 30px 0'}
      minHeight="450px"
    >
      <Flex flexDir="column" alignItems={navSize === 'small' ? 'center' : 'flex-start'} as="nav">
        <Flex mt={5} flexDir="column" w="100%" alignItems={navSize === 'small' ? 'center' : 'flex-start'} p="15px 10px">
          <Image
            alt="menu"
            src="/icons/menu.svg"
            width={21}
            height={0}
            onClick={() => {
              if (navSize === 'small') {
                changeNavSize('large')
              } else {
                changeNavSize('small')
              }
            }}
          />
        </Flex>
        <Item
          navSize={navSize}
          icon="home"
          title="Dashboard"
          href=""
        />
        <Item
          navSize={navSize}
          icon="bar-chart-2"
          title="Report"
          href="/reports"
        />
        <Item
          navSize={navSize}
          icon="users"
          title="Teachers"
          name="teachers"
          href="/teachers"
        />
        <Item
          navSize={navSize}
          icon="calendar"
          title="Attendance"
          href="/attendance"
        />
      </Flex>
      <Flex css={SidebarStyle.avatar} alignItems={navSize === 'small' ? 'center' : 'flex-start'}>
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="/profile-picture.jpeg" />
          <Flex flexDir="column" ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
            <Heading as="h3" size="sm" color="#577D86">
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
