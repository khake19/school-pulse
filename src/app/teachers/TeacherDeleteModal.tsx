import { Button } from '@chakra-ui/react'
import React from 'react'
import AlertModal from '~/components/Alert/AlertModal/AlertModal'

interface ITeacherDeleteModalProps {
  isOpen: boolean
  onClose: () => void
}
const TeacherDeleteModal = (props: ITeacherDeleteModalProps) => {
  const { isOpen, onClose } = props
  const cancelRef = React.useRef(null)

  const actions = (
    <>
      <Button ref={cancelRef} onClick={onClose}>
        No
      </Button>
      <Button colorScheme="teal" ml={3} onClick={() => console.log('delete')}>
        Yes
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
