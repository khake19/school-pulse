import { memo, useEffect } from 'react'

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import leaveSchema, { TLeaveFormInput } from './schema/leave'
import LeaveForm from './LeaveForm'
import useAlert from '~/hooks/useAlert'
import useCreateLeave from './hooks/useCreateLeave'
import LeaveMessage from './constant/message'
import { IModalRootProps } from '~/components/Modal/Modal'
import { ILeaveEventData } from './types/leaves'
import useUpdateLeave from './hooks/useUpdateLeave'

interface ILeaveFormModalProps extends IModalRootProps {
  teacherId?: string
  leave: ILeaveEventData | undefined
  editMode: boolean
}

const LeaveFormModal = memo((props: ILeaveFormModalProps) => {
  const { teacherId, isOpen, onClose, leave, editMode } = props
  const school = useCurrentSchool((state) => state.school)
  const queryClient = useQueryClient()

  const methods = useForm<TLeaveFormInput>({
    resolver: zodResolver(leaveSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset, setValue } = methods

  useEffect(() => {
    if (leave) {
      reset({
        id: leave.id,
        startAt: leave.start,
        endAt: leave.end,
        remarks: leave?.remarks,
        teacherId: leave?.teacherId,
        leaveType: leave?.type
      })
    }
  }, [leave])

  const { createLeave } = useCreateLeave({
    onSuccess: async () => {
      queryClient.invalidateQueries(['leaves'])
      alert.success(LeaveMessage.created)
      reset()
      onClose()
    }
  })

  const { updateLeave } = useUpdateLeave({
    onSuccess: async () => {
      queryClient.invalidateQueries(['leaves'])
      alert.success(LeaveMessage.updated)
      reset()
      onClose()
    }
  })

  const handleCreateLeave = () => {
    handleSubmit((data) => createLeave(school.id, data))()
  }

  const handleUpdateLeave = () => {
    handleSubmit((data) => updateLeave(school.id, data.id, data))()
  }

  const createActions = (
    <Button onClick={handleCreateLeave} bg="brand.500" type="submit" variant="outline" color="#FFFF">
      <Text>Create</Text>
    </Button>
  )

  const updateActions = (
    <Button onClick={handleUpdateLeave} bg="brand.500" type="submit" variant="outline" color="#FFFF">
      <Text>Update</Text>
    </Button>
  )

  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Heading size="xl">Leaves</Heading>
        <Spacer />
      </Flex>
      <BasicModal
        title={editMode ? 'Update Leave' : 'Add Leave'}
        actions={editMode ? updateActions : createActions}
        isOpen={isOpen}
        onClose={onClose}
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
