import { Button } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import DocumentForm from './DocumentForm'
import documentSchema, { TDocumentFormInput } from './schema/documents'
import IFormModal from '~/types/formModal'
import DocumentsMessage from './constant/documents'
import useAlert from '~/hooks/useAlert'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useCreateDocument from './hooks/useCreateDocument'
import { useEffect } from 'react'

interface IDocumentFormModalProps extends IFormModal {
  teacherId?: string
}

const DocumentFormModal = (props: IDocumentFormModalProps) => {
  const { isOpen, onClose, teacherId } = props
  const school = useCurrentSchool((state) => state.school)
  const queryClient = useQueryClient()

  const methods = useForm<TDocumentFormInput>({
    resolver: zodResolver(documentSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset, setValue } = methods

  const { createDocument } = useCreateDocument({
    onSuccess: async () => {
      queryClient.invalidateQueries(['documents'])
      alert.success(DocumentsMessage.created)
      reset()
      onClose()
    }
  })

  const handleCreateDocument = () => {
    handleSubmit((data) => createDocument(school.id, data))()
  }

  useEffect(() => {
    setValue('teacherId', teacherId ?? '')
  }, [teacherId, setValue])

  const createActions = (
    <Button onClick={handleCreateDocument} mt={4} bg="brand.300" type="submit" variant="outline">
      <Text>Submit</Text>
    </Button>
  )

  return (
    <BasicModal title="Add Document" actions={createActions} isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <DocumentForm showTeachers={!teacherId} />
      </FormProvider>
    </BasicModal>
  )
}

export default DocumentFormModal
