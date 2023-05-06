import React from 'react'
import { Flex, Text, Link, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'

interface SidebarItemProps {
  icon: any
  title: string
  active?: boolean
  navSize: string
  handleClick: (title: string) => void
}

const SidebarItem = ({ icon, title, active, navSize, handleClick }: SidebarItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const iconActive = isOpen || active ? '-active' : ''
  return (
    <Flex
      mt="20px"
      flexDir="column"
      w="100%"
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onClick={() => handleClick(title)}
    >
      <Link p="15px 10px" _hover={{ textDecor: 'none' }}>
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
