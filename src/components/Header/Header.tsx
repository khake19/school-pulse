import React from 'react'
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Text, GridItem } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import HeaderStyle from './Header.style'

const Header = () => {
  return (
    <GridItem area={'header'}>
      <Box css={HeaderStyle.header} zIndex={100}>
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <Box>
            <Menu>
              <MenuButton as={Button} css={HeaderStyle.menuButton}>
                <Flex direction="row">
                  <Text marginRight="12px" fontSize="md" fontWeight="500">
                    Aroroy National High School
                  </Text>
                  <Spacer />
                  <TriangleDownIcon />
                </Flex>
              </MenuButton>
              <MenuList width="300px">
                <MenuItem minH="48px">
                  <span>Matongog Elementary School</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <span>Calanay High School</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </GridItem>
  )
}

export default Header