import { Button } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import DocumentForm from './DocumentForm'
import documentSchema, { TDocumentFormInput } from './schema/documents'
import IFormModal from '~/types/formModal'
import useCreateDocument from './hooks/useCreateDocument'
import DocumentsMessage from './constant/documents'
import useAlert from '~/hooks/useAlert'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

const DocumentFormModal = (props: IFormModal) => {
  const { isOpen, onClose } = props
  const school = useCurrentSchool((state) => state.school)

  const methods = useForm<TDocumentFormInput>({
    resolver: zodResolver(documentSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset } = methods

  const { createDocument } = useCreateDocument({
    onSuccess: async () => {
      alert.success(DocumentsMessage.created)
      reset()
      onClose()
    }
  })

  const handleCreateDocument = () => {
    handleSubmit((data) => createDocument(school.id, data))()
    reset()
  }

  const createActions = (
    <Button onClick={handleCreateDocument} mt={4} colorScheme="teal" type="submit">
      Submit
    </Button>
  )

  return (
    <BasicModal title={`Add Document`} actions={createActions} isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <DocumentForm />
      </FormProvider>
    </BasicModal>
  )
}

export default DocumentFormModal
