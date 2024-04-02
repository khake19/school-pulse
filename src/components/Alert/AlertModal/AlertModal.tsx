import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react'
import React from 'react'

interface IAlertModalProps {
  isOpen: boolean
  onClose: () => void
  label: string
  description: string
  actions: React.ReactNode
}

const AlertModal = (props: IAlertModalProps) => {
  const { isOpen, onClose, label, description, actions } = props
  const cancelRef = React.useRef(null)

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{label}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        {actions && <AlertDialogFooter> {actions} </AlertDialogFooter>}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModal
