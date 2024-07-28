import { Box, Text, Heading, Flex, Spacer, ButtonGroup, Button, useDisclosure } from '@chakra-ui/react'
import { TTeacherData } from '../types/teachers'
import DocumentTable from './DocumentTable'
import DocumentFormModal from './DocumentFormModal'
import DocumentDeleteModal from './DocumentDeleteModal'
import { useState } from 'react'

interface IDocumentProps {
  teacher: TTeacherData
}

const Document = (props: IDocumentProps) => {
  const { teacher } = props

  const { isOpen: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { isOpen: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [documentId, setDocumentId] = useState('')

  const handleCreate = () => {
    onFormModalOpen()
  }

  const handleDelete = (documentId: string) => {
    onAlertModalOpen()
    setDocumentId(documentId)
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
            <Button onClick={handleCreate} bg="brand.400" color="white">
              <Text>Add Documents</Text>
            </Button>
          </ButtonGroup>
        </Flex>
        <DocumentFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} teacherId={teacher.id} />
        <DocumentDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} documentId={documentId} />
        <DocumentTable handleDelete={handleDelete} />
      </Box>
    </Box>
  )
}

export default Document
