import { Box, Text, Divider, Heading } from '@chakra-ui/react'
import { TTeacherData } from '../types/teachers'
import DocumentTable from './DocumentTable'

interface IDocumentProps {
  teacher: TTeacherData
}
const Document = (props: IDocumentProps) => {
  const { teacher } = props

  const documents = [
    {
      fileName: 'Social Security System',
      uploadedBy: 'Kerk Jazul',
      lastModified: 'June 1, 2024',
      type: 'docx',
      size: 1000,
      email: 'kerk.jazul@gmail.com',
      avatar: '/images/avatars/dbe1ac11-70b7-4cd3-84f6-7344dca61859/original.jpg?v=63883339267'
    },
    {
      fileName: 'Tin ID',
      uploadedBy: 'Samantha Jazul',
      lastModified: 'June 2, 2024',
      type: 'pdf',
      size: 2000,
      email: 'sam.jazul@gmail.com',
      avatar: '/images/avatars/6405eea0-cfe5-4348-b411-5854ca0b88b2/original.jpg?v=63883352384'
    },
    {
      fileName: 'Passport',
      uploadedBy: 'Hazel Jazul',
      lastModified: 'June 4, 2024',
      type: 'excel',
      size: 300,
      email: 'hazel.jazul@gmail.com',
      avatar: ''
    }
  ]

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
        <DocumentTable documents={documents} />
      </Box>
    </Box>
  )
}

export default Document
