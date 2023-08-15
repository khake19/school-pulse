import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import Select from 'react-select'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'

import Calendar from '~/components/Calendar'
import Leaves from '~/constant/leave'

type Event = {
  title: string
  start?: string
  end?: string
  date?: string
  color: string
}

type EventInfo = {
  timeText: string
  event: {
    title: string
  }
}

type EventContent = {
  start: Date
  end: Date
  startStr: string
  endStr: string
}

const events: Event[] = [
  { title: Leaves.force, start: '2023-08-24', end: '2023-08-29', color: '#FC8181' },
  { title: Leaves.accrued, date: '2023-08-24', color: '#F6AD55' },
  { title: Leaves.regular, date: '2023-08-23', color: '#68D391' }
]

const SingleLeaveCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [content, setContent] = useState<EventContent | undefined>()
  const { handleSubmit } = useForm()

  const onSubmit = (data: any) => console.log(data)

  // https://github.com/fullcalendar/fullcalendar/issues/3679#issuecomment-302919588
  const ConfirmationModal = () => {
    const options = [
      { label: 'Force Leave', value: 'force_leave' },
      { label: 'Accrued Leave', value: 'accrued_leave' },
      { label: 'Regular Leave', value: 'regular_leave' }
    ]

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>File Leave</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex>
                <Box>
                  <Box color="gray.500" fontSize="14px">
                    Start Date
                  </Box>
                  <Box color="gray.600">{content && format(content.start, 'MMMM d, yyyy')}</Box>
                </Box>
                <Spacer />
                <Box>
                  <Box color="gray.500" fontSize="14px">
                    End Date
                  </Box>
                  <Box color="gray.600">{content && format(subDays(content.end, 1), 'MMMM d, yyyy')}</Box>
                </Box>
              </Flex>
              <Divider margin="10px 0" />
              <FormControl>
                <FormLabel color="gray.500" fontSize="14px">
                  Type of Leave
                </FormLabel>
                <Select options={options} defaultValue={options[0]} />
              </FormControl>
              <FormControl marginTop="5px">
                <FormLabel color="gray.500" fontSize="14px">
                  Remarks
                </FormLabel>
                <Textarea placeholder="Remarks" />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  const renderEventContent = (eventInfo: EventInfo) => {
    return (
      <Box padding="5px" margin="2px">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </Box>
    )
  }

  // Issue: https://github.com/fullcalendar/fullcalendar/issues/7334
  const handleSelectedDate = (eventContent: EventContent) => {
    setContent(eventContent)
    onOpen()
  }

  return (
    <Box>
      {isOpen && <ConfirmationModal />}
      <Calendar events={events} renderEventContent={renderEventContent} handleSelectedDate={handleSelectedDate} />
    </Box>
  )
}

export default SingleLeaveCalendar
