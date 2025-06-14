import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import AlertModal from '~/components/Alert/AlertModal/AlertModal'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import LeaveMessage from './constant/message'
import useAlert from '~/hooks/useAlert'
import useDeleteLeave from './hooks/useDeleteLeave'

interface ILeaveDeleteModalProps {
  isOpen: boolean
  onClose: () => void
  leaveId: string
  onSuccess?: () => void
}
const LeaveDeleteModal = (props: ILeaveDeleteModalProps) => {
  const { isOpen, onClose, leaveId, onSuccess } = props
  const school = useCurrentSchool((state) => state.school)
  const cancelRef = React.useRef(null)
  const alert = useAlert()
  const queryClient = useQueryClient()

  const { deleteLeave } = useDeleteLeave({
    onSuccess: async () => {
      alert.success(LeaveMessage.deleted)
      queryClient.invalidateQueries(['leaves'])
      onClose()
      onSuccess?.()
    }
  })

  const handleDeleteLeave = () => {
    deleteLeave(school.id, leaveId)
  }

  const actions = (
    <>
      <Button ref={cancelRef} onClick={onClose} variant="outline">
        <Text>Cancel</Text>
      </Button>
      <Button bg="button.danger" ml={1} onClick={handleDeleteLeave}>
        <Text>Delete</Text>
      </Button>
    </>
  )
  return (
    <AlertModal
      isOpen={isOpen}
      onClose={onClose}
      label="Delete Leave"
      description="Are you sure you want to delete this leave?"
      actions={actions}
    />
  )
}

export default LeaveDeleteModal
