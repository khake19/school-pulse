import React from 'react'
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <Box w="100%" px={4} boxShadow="base" borderTop="solid 4px #569DAA">
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Box>
          <Menu>
            <MenuButton as={Button}>
              Aroroy East Central School
              <TriangleDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH="40px">
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  )
}

export default Header
