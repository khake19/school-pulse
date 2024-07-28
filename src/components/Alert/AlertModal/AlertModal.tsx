import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Text
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
        <AlertDialogHeader>
          <Text>{label}</Text>
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <Text>{description}</Text>
        </AlertDialogBody>
        {actions && (
          <AlertDialogFooter>
            {' '}
            <Text>{actions}</Text>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModal
