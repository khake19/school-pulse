import React from 'react'
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import HeaderStyle from './Header.style'

const Header = () => {
  return (
    <Box css={HeaderStyle.header} zIndex={100} color="gray.600">
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              css={HeaderStyle.menuButton}
              bg="#B9EDDD"
              _hover={{ bg: '#87CBB9' }}
              _active={{ bg: '#87CBB9' }}
            >
              <Flex direction="row">
                <Text marginRight="12px" fontSize="md" fontWeight="500">
                  Aroroy National High School
                </Text>
                <Spacer />
                <TriangleDownIcon />
              </Flex>
            </MenuButton>
            <MenuList width="300px">
              <MenuItem minH="48px" _focus={{ bg: '#87CBB9' }}>
                <Text>Matongog Elementary School</Text>
              </MenuItem>
              <MenuItem minH="40px" _focus={{ bg: '#87CBB9' }}>
                <Text>Calanay High School</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
