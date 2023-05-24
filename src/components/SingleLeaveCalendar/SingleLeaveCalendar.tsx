import React from 'react'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import Calendar from '~/components/Calendar'

type Event = {
  title: string
  start?: string
  end?: string
  date?: string
}

const events: Event[] = [
  { title: 'Force Leave', start: '2023-05-11', end: '2023-05-15' },
  { title: 'Accrued Leave', date: '2023-05-24' }
]
const SingleLeaveCaelendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const ConfirmationModal = () => {
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Hello</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  return (
    <Box>
      <ConfirmationModal />
      <Calendar events={events} />
    </Box>
  )
}

export default SingleLeaveCaelendar
