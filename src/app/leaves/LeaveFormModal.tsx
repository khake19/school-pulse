import { memo } from 'react'

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { Text } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import BasicModal from '~/components/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import leaveSchema, { TLeaveFormInput } from './schema/leave'
import LeaveForm from './LeaveForm'
import { SlotInfo } from 'react-big-calendar'
import useAlert from '~/hooks/useAlert'

interface ILeaveFormModalProps {
  isOpen: boolean
  onClose: () => void
  teacherId?: string
  slot: SlotInfo | undefined
}

const LeaveFormModal = memo((props: ILeaveFormModalProps) => {
  const { teacherId, isOpen, onClose, slot } = props
  const school = useCurrentSchool((state) => state.school)
  const queryClient = useQueryClient()

  const methods = useForm<TLeaveFormInput>({
    resolver: zodResolver(leaveSchema)
  })

  const alert = useAlert()
  const { handleSubmit, reset, setValue } = methods

  //   const { createDocument } = useCreateDocument({
  //     onSuccess: async () => {
  //       queryClient.invalidateQueries(['documents'])
  //       alert.success(DocumentsMessage.created)
  //       reset()
  //       onFormModalClose()
  //     }
  //   })

  const handleCreateLeave = () => {
    handleSubmit((data) => console.log(school.id, data))()
  }

  //   useEffect(() => {
  //     setValue('teacherId', teacherId ?? '')
  //   }, [teacherId, setValue])

  const createActions = (
    <Button onClick={handleCreateLeave} bg="brand.500" type="submit" variant="outline" color="#FFFF">
      <Text>Submit</Text>
    </Button>
  )

  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Heading size="xl">Leaves</Heading>
        <Spacer />
      </Flex>
      <BasicModal title="Add Leave" actions={createActions} isOpen={isOpen} onClose={onClose}>
        <FormProvider {...methods}>
          <LeaveForm showTeachers={!teacherId} startDate={slot?.start} endDate={slot?.end} />
        </FormProvider>
      </BasicModal>
    </Box>
  )
})

LeaveFormModal.displayName = 'LeaveFormModal'

export default LeaveFormModal
