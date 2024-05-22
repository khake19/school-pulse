import { Box, Text, Divider, Heading } from '@chakra-ui/react'
import { TTeacherData } from '../types/teachers'

interface IDocumentProps {
  teacher: TTeacherData
}
const Document = (props: IDocumentProps) => {
  const { teacher } = props

  return (
    <Box>
      <Box marginBottom={10}>
        <Heading as="h4" size="md" pt={5}>
          Documents
        </Heading>
        <Text pt={2} pb={5}>
          Upload your government files.
        </Text>
        <Divider />
      </Box>
    </Box>
  )
}

export default Document
