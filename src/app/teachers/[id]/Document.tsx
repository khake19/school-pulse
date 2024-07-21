import { Box, Text, Divider, Heading, Flex, Spacer, ButtonGroup, Button, useDisclosure } from '@chakra-ui/react'
import { TTeacherData } from '../types/teachers'
import DocumentTable from './DocumentTable'
import DocumentFormModal from './DocumentFormModal'
import useGetDocuments from './hooks/useGetDocument'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

interface IDocumentProps {
  teacher: TTeacherData
}

const Document = (props: IDocumentProps) => {
  const { teacher } = props

  const school = useCurrentSchool((state) => state.school)
  const { data } = useGetDocuments(school?.id)

  const { isOpen: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()

  const handleCreate = () => {
    onFormModalOpen()
  }

  return (
    <Box>
      <Box marginBottom={10}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading as="h4" size="md" pt={5}>
              Documents
            </Heading>
            <Text pt={2} pb={5}>
              Upload your government files.
            </Text>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button onClick={handleCreate}>
              <Text>Add Documents</Text>
            </Button>
          </ButtonGroup>
        </Flex>
        <DocumentFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} teacherId={teacher.id} />
        <DocumentTable documents={data.data} />
      </Box>
    </Box>
  )
}

export default Document
