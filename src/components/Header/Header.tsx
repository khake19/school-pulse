import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import HeaderStyle from './Header.style'
import SchoolsMenu from './SchoolsMenu'
import AccountMenu from './AccountMenu'

const Header = () => {
  return (
    <Box css={HeaderStyle.header} zIndex={100} color="gray.600">
      <Flex h="60px" alignItems="center" justifyContent="space-between">
        <SchoolsMenu />
        <AccountMenu />
      </Flex>
    </Box>
  )
}

export default Header
