'use client'
import { Box } from '@chakra-ui/react'
import DocumentList from './DocumentList'
import { main } from './Document.style'

const Teachers = () => {
  return (
    <Box css={main}>
      <DocumentList />
    </Box>
  )
}

export default Teachers
