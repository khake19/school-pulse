import { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import DocumentTable from '~/app/documents/DocumentTable'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import { header } from '~/app/documents/Document.style'
import useGetDocuments from './hooks/useGetDocuments'

// Lazy load modals
const DocumentFormModal = dynamic(() => import('~/app/documents/DocumentFormModal'), {
  ssr: false,
  loading: () => null
})

const DocumentDeleteModal = dynamic(() => import('~/app/documents/DocumentDeleteModal'), {
  ssr: false,
  loading: () => null
})

interface IDocumentListProps {
  teacherId?: string
}

const DocumentList = (props: IDocumentListProps) => {
  const { teacherId = '' } = props
  const school = useCurrentSchool((state) => state.school)
  const { data: documents, meta, isLoading, setCurrentPage } = useGetDocuments(school?.id, teacherId)

  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [documentId, setDocumentId] = useState('')

  const handleDelete = (documentId: string) => {
    onAlertModalOpen()
    setDocumentId(documentId)
  }

  return (
    <Box css={header}>
      <DocumentFormModal teacherId={teacherId} />
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
