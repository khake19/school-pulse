import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import AlertModal from '~/components/Alert/AlertModal/AlertModal'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import DocumentMessage from './constant/documents'
import useAlert from '~/hooks/useAlert'
import useDeleteDocument from './hooks/useDeleteDocument'

interface IDocumentDeleteModalProps {
  isOpen: boolean
  onClose: () => void
  documentId: string
}
const DocumentDeleteModal = (props: IDocumentDeleteModalProps) => {
  const { isOpen, onClose, documentId } = props
  const school = useCurrentSchool((state) => state.school)
  const cancelRef = React.useRef(null)
  const alert = useAlert()
  const queryClient = useQueryClient()

  const { deleteDocument } = useDeleteDocument({
    onSuccess: async () => {
      alert.success(DocumentMessage.deleted)
      queryClient.invalidateQueries(['documents'])
      onClose()
    }
  })

  const handleDeleteDocument = () => {
    deleteDocument(school.id, documentId)
  }

  const actions = (
    <>
      <Button ref={cancelRef} onClick={onClose}>
        <Text>No</Text>
      </Button>
      <Button colorScheme="teal" ml={3} onClick={handleDeleteDocument}>
        <Text>Yes</Text>
      </Button>
    </>
  )
  return (
    <AlertModal
      isOpen={isOpen}
      onClose={onClose}
      label="Delete Document"
      description="Are you sure you want to delete this document?"
      actions={actions}
    />
  )
}

export default DocumentDeleteModal
