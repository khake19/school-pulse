'use client'
import { Box, useDisclosure } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { Event, DateRange, SlotInfo } from 'react-big-calendar'
import Calendar from '~/components/Calendar/Calendar'
import Layout from '~/components/Layout'
import LeaveFormModal from './LeaveFormModal'

export default function Page() {
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [slot, setSlot] = useState<SlotInfo>()

  const handleSelectEvent = useCallback((event: Event) => {
    console.log('handle select event')
  }, [])

  const handleSelectSlot = useCallback((props: SlotInfo) => {
    console.log('handle select slot', props)
    setSlot(props)
    onAlertModalOpen()
  }, [])

  return (
    <Layout>
      <Box width="100%" margin={10}>
        <LeaveFormModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} slot={slot} />
        <Calendar events={[]} handleSelectEvent={handleSelectEvent} handleSelectSlot={handleSelectSlot} />
      </Box>
    </Layout>
  )
}
