import React, { useState } from 'react'
import { Avatar, Divider, Heading, IconButton, Flex, GridItem, Text } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import SidebarStyle from './Sidebar.style'

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large')
  return (
    <GridItem area={'nav'}>
      <Flex
        css={SidebarStyle.sidebar}
        width={navSize === 'small' ? '75px' : '200px'}
        borderRadius={navSize === 'small' ? '0 15px 15px 0' : '0 30px 30px 0'}
      >
        <Flex p="5%" flexDir="column" alignItems={navSize === 'small' ? 'center' : 'flex-start'} as="nav">
          <IconButton
            aria-label="icon-menu"
            background="none"
            mt={5}
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize === 'small') {
                changeNavSize('large')
              } else {
                changeNavSize('small')
              }
            }}
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
