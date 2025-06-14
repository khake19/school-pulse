import { memo, useEffect, useCallback } from 'react'

import { Box, Button, DialogActionTrigger, DialogFooter, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import leaveSchema, { TLeaveFormInput, TUpdateLeaveFormInput, updateLeaveSchema } from './schema/leave'
import LeaveForm from './LeaveForm'
import useAlert from '~/hooks/useAlert'
import useCreateLeave from './hooks/useCreateLeave'
import LeaveMessage from './constant/message'
import { IModalRootProps } from '~/components/Modal/Modal'
import { ILeaveEventData } from './types/leaves'
import useUpdateLeave from './hooks/useUpdateLeave'

// Lazy load the delete modal
const LeaveDeleteModal = dynamic(() => import('./DeleteLeaveModal'), {
  ssr: false,
  loading: () => null
})

interface ILeaveFormModalProps extends IModalRootProps {
  teacherId?: string
  leave: ILeaveEventData | undefined
  editMode: boolean
}

const LeaveFormModal = memo((props: ILeaveFormModalProps) => {
  const { teacherId, isOpen, onClose, leave, editMode } = props
  const school = useCurrentSchool((state) => state.school)
  const queryClient = useQueryClient()

  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()

  const methods = useForm<TUpdateLeaveFormInput | TLeaveFormInput>({
    resolver: zodResolver(editMode ? updateLeaveSchema : leaveSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset } = methods

  useEffect(() => {
    if (leave) {
      reset({
        id: leave?.id,
        startAt: leave.start,
        endAt: leave.end,
        remarks: leave?.remarks,
        teacherId: leave?.teacherId,
        type: leave?.type
      })
    }
  }, [leave])

  const { createLeave } = useCreateLeave({
    onSuccess: async () => {
      queryClient.invalidateQueries(['leaves'])
      alert.success(LeaveMessage.created)
      onClose()
    }
  })

  const { updateLeave } = useUpdateLeave({
    onSuccess: async () => {
      queryClient.invalidateQueries(['leaves'])
      alert.success(LeaveMessage.updated)
      onClose()
    }
  })

  const handleCreateLeave = useCallback(() => {
    handleSubmit((data) => createLeave(school.id, data))()
  }, [handleSubmit, createLeave, school.id])

  const handleUpdateLeave = useCallback(() => {
    handleSubmit((data) => {
      if ('id' in data) {
        updateLeave(school.id, data)
      }
    })()
  }, [handleSubmit, updateLeave, school.id])

  const handleDeleteLeave = useCallback(() => {
    onAlertModalOpen()
  }, [onAlertModalOpen])

  const FooterComponent = (
    <DialogFooter>
      {editMode && (
        <Button onClick={handleDeleteLeave} bg="button.danger" type="submit" variant="outline" color="#FFFF">
          <Text>Delete</Text>
        </Button>
      )}
      <Spacer />
      <DialogActionTrigger asChild>
        <Button variant="outline">Cancel</Button>
      </DialogActionTrigger>
      {editMode ? (
        <Button onClick={handleUpdateLeave} bg="brand.500" type="submit" variant="outline" color="#FFFF">
          <Text>Update</Text>
        </Button>
      ) : (
        <Button onClick={handleCreateLeave} bg="brand.500" type="submit" variant="outline" color="#FFFF">
          <Text>Create</Text>
        </Button>
      )}
    </DialogFooter>
  )

  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Heading size="xl">Leaves</Heading>
        <Spacer />
      </Flex>
      <LeaveDeleteModal
        isOpen={isAlertModalOpen}
        onClose={onAlertModalClose}
        leaveId={leave?.id || ''}
        onSuccess={onClose}
      />
      <BasicModal
        title={editMode ? 'Update Leave' : 'Add Leave'}
        isOpen={isOpen}
        onClose={onClose}
        footerActions={FooterComponent}
      >
        <FormProvider {...methods}>
          <LeaveForm showTeachers={!teacherId} />
        </FormProvider>
      </BasicModal>
    </Box>
  )
})

export default LeaveFormModal

LeaveFormModal.displayName = 'LeaveFormModal'
