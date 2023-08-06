'use client'

import React from 'react'
import { Flex, Text, Link, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface ISidebarItemProps {
  icon: string;
  title: string;
  name?: string;
  href?: string;
  navSize: string;
}

const SidebarItem = ({ icon, title, name = '', navSize, href }: ISidebarItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const active = pathname === href 
  const iconActive = isOpen || active ? '-active' : ''

  return (
    <Flex
      mt="20px"
      flexDir="column"
      w="100%"
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link p="15px 10px" _hover={{ textDecor: 'none' }} as={NextLink} href={name}>
        <Flex>
          <Image src={`/icons/${icon}${iconActive}.svg`} height={0} width={21} alt="sidebar-icon" color="red" />
          <Text
            ml={5}
            display={navSize == 'small' ? 'none' : 'flex'}
            fontSize="14px"
            color={active || isOpen ? '#87CBB9' : 'gray.500'}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  )
}

export default SidebarItem
