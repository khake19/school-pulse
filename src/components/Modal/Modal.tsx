import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import React from 'react'

interface IBasicModal {
  title: string
  children: React.ReactNode
  actions: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const BasicModal = (props: IBasicModal) => {
  const { children, title, actions, isOpen, onClose } = props

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {actions && <ModalFooter>{actions}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  )
}

export default BasicModal
