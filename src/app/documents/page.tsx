'use client'
import { Box } from '@chakra-ui/react'
import DocumentList from './DocumentList'
import DocumentStyle from './Document.style'

const Teachers = () => {
  return (
    <Box css={DocumentStyle.main}>
      <DocumentList />
    </Box>
  )
}

export default Teachers
