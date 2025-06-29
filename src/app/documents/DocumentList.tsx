import { useState } from 'react'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import DocumentTable from './DocumentTable'
import { header } from './Document.style'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useGetDocuments from './hooks/useGetDocuments'
import TeacherSelect from './component/TeacherSelect'
import { useShallow } from 'zustand/react/shallow'
import useFilterStore from './hooks/useFilterStore'

// Lazy load modals
const DocumentFormModal = dynamic(() => import('./DocumentFormModal'), {
  ssr: false,
  loading: () => null
})

const DocumentDeleteModal = dynamic(() => import('./DocumentDeleteModal'), {
  ssr: false,
  loading: () => null
})

interface IDocumentListProps {
  teacherId?: string
}

const DocumentList = (props: IDocumentListProps) => {
  const { teacherId = '' } = props
  const school = useCurrentSchool((state) => state.school)
  const setTeacherFilters = useFilterStore(useShallow((state) => state.documents.setFilters))
  const { data: documents, meta, isLoading, setCurrentPage } = useGetDocuments(school?.id)

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
      <Box w="50%" mt={4}>
        <Flex gap={2}>
          <Box flex="1">
            <TeacherSelect isForm={false} onChange={(value) => setTeacherFilters({ teacherId: value.toString() })} />
          </Box>
          <Box flex="1"></Box>
        </Flex>
      </Box>
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
