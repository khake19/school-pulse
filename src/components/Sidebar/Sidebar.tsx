import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, Divider, Heading, IconButton, Flex, GridItem, Text } from '@chakra-ui/react'
import SidebarStyle from './Sidebar.style'
import Item from './Item'

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large')
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <GridItem area={'nav'}>
      <Flex
        css={SidebarStyle.sidebar}
        width={navSize === 'small' ? '75px' : '180px'}
        borderRadius={navSize === 'small' ? '0 15px 15px 0' : '0 30px 30px 0'}
      >
        <Flex flexDir="column" alignItems={navSize === 'small' ? 'center' : 'flex-start'} as="nav">
          <Flex
            mt={5}
            flexDir="column"
            w="100%"
            alignItems={navSize === 'small' ? 'center' : 'flex-start'}
            p="15px 10px"
          >
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
            handleClick={(title: string) => setActiveItem(title)}
            active={activeItem === 'Dashboard'}
          />
          <Item
            navSize={navSize}
            icon="bar-chart-2"
            title="Report"
            handleClick={(title: string) => setActiveItem(title)}
            active={activeItem === 'Report'}
          />
          <Item
            navSize={navSize}
            icon="users"
            title="Teachers"
            handleClick={(title: string) => setActiveItem(title)}
            active={activeItem === 'Teachers'}
          />
          <Item
            navSize={navSize}
            icon="calendar"
            title="Attendance"
            handleClick={(title: string) => setActiveItem(title)}
            active={activeItem === 'Attendance'}
          />
        </Flex>
        <Flex css={SidebarStyle.avatar} alignItems={navSize === 'small' ? 'center' : 'flex-start'}>
          <Divider display={navSize === 'small' ? 'none' : 'flex'} />
          <Flex mt={4} align="center">
            <Avatar size="sm" />
            <Flex flexDir="column" ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
              <Heading as="h3" size="sm">
                Eduard Jazul
              </Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  )
}

export default Sidebar
