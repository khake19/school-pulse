import { useState } from 'react'
import { Box, Button, Group, Flex, Heading, Spacer, Text, useDisclosure } from '@chakra-ui/react'

import DocumentTable from './DocumentTable'
import { header } from './Document.style'
import DocumentFormModal from './DocumentFormModal'
import DocumentDeleteModal from './DocumentDeleteModal'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useGetDocuments from './hooks/useGetDocuments'

interface IDocumentListProps {
  teacherId?: string
}

const DocumentList = (props: IDocumentListProps) => {
  const { teacherId = '' } = props

  const [currentPage, setCurrentPage] = useState(1)
  const defaultParams = currentPage === 0 ? {} : { page: currentPage.toString() }
  const school = useCurrentSchool((state) => state.school)

  const {
    data: documents,
    meta,
    isLoading
  } = useGetDocuments(school?.id, { ...defaultParams, ...(teacherId && { teacher_id: teacherId }) })

  const { open: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [documentId, setDocumentId] = useState('')

  const handleCreate = () => {
    onFormModalOpen()
  }

  const handleDelete = (documentId: string) => {
    onAlertModalOpen()
    setDocumentId(documentId)
  }

  return (
    <Box css={header}>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Heading size="md">Documents</Heading>
          <Spacer />
          <Group gap="2">
            <Button onClick={handleCreate} bg="teal" color="white">
              <Text>Add Document</Text>
            </Button>
          </Group>
        </Flex>
      </Box>
      <DocumentFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} teacherId={teacherId} />
      <DocumentDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} documentId={documentId} />
      <DocumentTable
        handleDelete={handleDelete}
        data={documents}
        pagination={meta}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
        showFullName={!teacherId}
      />
    </Box>
  )
}

export default DocumentList
