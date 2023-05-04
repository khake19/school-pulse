import React from 'react'
import { Box, GridItem } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <GridItem bg="purple.50" area={'nav'} height="calc(100vh - 75px)">
      <Box>Nav</Box>
    </GridItem>
  )
}

export default Sidebar
