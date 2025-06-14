'use client'
import { Box, useDisclosure } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { DateRange, Event, SlotInfo } from 'react-big-calendar'
import Calendar from '~/components/Calendar/Calendar'
import Layout from '~/components/Layout'
import LeaveFormModal from './LeaveFormModal'
import useGetLeaves from './hooks/useGetLeaves'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useSlotEvent from './hooks/useSlotEvent'
import { setDate } from 'date-fns'
import LeaveDeleteModal from './DeleteLeaveModal'

interface ILeavesProps {
  teacherId?: string
}

export default function Page(props: ILeavesProps) {
  const { teacherId = '' } = props
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [dateRange, setDateRange] = useState<Date[] | DateRange>()

  const { event, createEvent, editMode } = useSlotEvent()

  const school = useCurrentSchool((state) => state.school)

  const { data: leaves } = useGetLeaves(school?.id, { ...dateRange, ...(teacherId && { teacher_id: teacherId }) })

  const handleSelectEvent = useCallback((event: Event) => {
    createEvent(event)
    onAlertModalOpen()
  }, [])

  const handleSelectSlot = useCallback((props: SlotInfo) => {
    createEvent(props)
    onAlertModalOpen()
  }, [])

  const handleRangeChange = useCallback((range: Date[] | DateRange) => {
    setDateRange(range)
  }, [])

  return (
    <Layout>
      <Box width="100%" margin={10}>
        <LeaveFormModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} leave={event} editMode={editMode} />
        <Calendar
          events={leaves}
          handleSelectEvent={handleSelectEvent}
          handleSelectSlot={handleSelectSlot}
          handleRangeChange={handleRangeChange}
        />
      </Box>
    </Layout>
  )
}
