'use client'

import React from 'react'
import { Flex, Text, Link as ChakraLink, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface ISidebarItemProps {
  icon: string
  title: string
  name?: string
  href?: string
  isSidebarOpen: boolean
}

const SidebarItem = ({ icon, title, name = '/', href, isSidebarOpen }: ISidebarItemProps) => {
  const { open, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()

  const active = pathname === href
  const iconActive = open || active ? '-active' : ''

  return (
    <Flex
      mt="10px"
      flexDir="column"
      w="100%"
      alignItems={isSidebarOpen ? 'flex-start' : 'center'}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <ChakraLink asChild p="8px 10px" _hover={{ textDecor: 'none' }} _focus={{ outline: 'none' }}>
        <NextLink href={name}>
          <Image src={`/icons/${icon}${iconActive}.svg`} height={21} width={21} alt="sidebar-icon" />
          <Text
            ml={5}
            display={isSidebarOpen ? 'flex' : 'none'}
            fontWeight={500}
            fontSize="sm"
            color={active || open ? 'teal.500' : 'gray.500'}
          >
            {title}
          </Text>
        </NextLink>
      </ChakraLink>
    </Flex>
  )
}

export default SidebarItem
