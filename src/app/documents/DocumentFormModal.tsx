import { memo, useEffect } from 'react'

import { Box, Button, Flex, Group, Heading, Spacer, useDisclosure } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import DocumentForm from './DocumentForm'
import documentSchema, { TDocumentFormInput } from './schema/documents'
import DocumentsMessage from './constant/documents'
import useAlert from '~/hooks/useAlert'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useCreateDocument from './hooks/useCreateDocument'

interface IDocumentFormModalProps {
  teacherId?: string
}

const DocumentFormModal = memo((props: IDocumentFormModalProps) => {
  const { teacherId } = props
  const school = useCurrentSchool((state) => state.school)
  const queryClient = useQueryClient()

  const methods = useForm<TDocumentFormInput>({
    resolver: zodResolver(documentSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset, setValue } = methods

  const { open: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()

  const { createDocument } = useCreateDocument({
    onSuccess: async () => {
      queryClient.invalidateQueries(['documents'])
      alert.success(DocumentsMessage.created)
      reset()
      onFormModalClose()
    }
  })

  const handleCreate = () => {
    onFormModalOpen()
  }

  const handleCreateDocument = () => {
    handleSubmit((data) => createDocument(school.id, data))()
  }

  useEffect(() => {
    setValue('teacherId', teacherId ?? '')
  }, [teacherId, setValue])

  const createActions = (
    <Button onClick={handleCreateDocument} bg="brand.500" type="submit" variant="outline" color="#FFFF">
      <Text>Submit</Text>
    </Button>
  )

  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Heading size="xl">Documents</Heading>
        <Spacer />
        <Group gap="2">
          <Button onClick={handleCreate} bg="brand.500" color="white">
            <Text>Add Document</Text>
          </Button>
        </Group>
      </Flex>
      <BasicModal title="Add Document" actions={createActions} isOpen={isFormModalOpen} onClose={onFormModalClose}>
        <FormProvider {...methods}>
          <DocumentForm showTeachers={!teacherId} />
        </FormProvider>
      </BasicModal>
    </Box>
  )
})

DocumentFormModal.displayName = 'DocumentFormModal'

export default DocumentFormModal
