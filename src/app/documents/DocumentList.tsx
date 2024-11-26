import { useState } from 'react'
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Text, useDisclosure } from '@chakra-ui/react'

import DocumentTable from './DocumentTable'
import DocumentStyle from './Document.style'
import useGetDocuments from './hooks/useGetDocuments'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import DocumentFormModal from './DocumentFormModal'
import DocumentDeleteModal from '../teachers/[id]/DocumentDeleteModal'

const DocumentList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { isOpen: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { isOpen: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [documentId, setDocumentId] = useState('')

  const defaultParams = currentPage === 0 ? {} : { page: currentPage.toString() }

  const school = useCurrentSchool((state) => state.school)
  const { data: documents, meta, isLoading } = useGetDocuments(school?.id, defaultParams)

  const handleCreate = () => {
    onFormModalOpen()
  }

  const handleDelete = (documentId: string) => {
    onAlertModalOpen()
    setDocumentId(documentId)
  }

  return (
    <Box css={DocumentStyle.main}>
      <Box css={DocumentStyle.header}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Documents</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button onClick={handleCreate} bg="brand.400" color="white">
              <Text>Add Document</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <DocumentFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} />
      <DocumentDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} documentId={documentId} />
      <DocumentTable
        handleDelete={handleDelete}
        data={documents}
        pagination={meta}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  )
}

export default DocumentList
