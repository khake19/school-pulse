import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import AlertModal from '~/components/Alert/AlertModal/AlertModal'
import useDeleteTeacher from './hooks/useDeleteTeacher'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import TeachersMessage from './constant/teachers'
import useAlert from '~/hooks/useAlert'

interface ITeacherDeleteModalProps {
  isOpen: boolean
  onClose: () => void
  teacherId: string
}
const TeacherDeleteModal = (props: ITeacherDeleteModalProps) => {
  const { isOpen, onClose, teacherId } = props
  const school = useCurrentSchool((state) => state.school)
  const cancelRef = React.useRef(null)
  const alert = useAlert()
  const queryClient = useQueryClient()

  const { deleteTeacher } = useDeleteTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.deleted)
      queryClient.invalidateQueries(['users'])
      onClose()
    }
  })

  const handleDeleteTeacher = () => {
    deleteTeacher(school.id, teacherId)
  }

  const actions = (
    <>
      <Button ref={cancelRef} onClick={onClose}>
        <Text>No</Text>
      </Button>
      <Button colorScheme="teal" ml={3} onClick={handleDeleteTeacher}>
        <Text>Yes</Text>
      </Button>
    </>
  )
  return (
    <AlertModal
      isOpen={isOpen}
      onClose={onClose}
      label="Delete Teacher"
      description="Are you sure you want to delete this teacher?"
      actions={actions}
    />
  )
}

export default TeacherDeleteModal
