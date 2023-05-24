import React from 'react'
import { Box } from '@chakra-ui/react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import CalendarStyle from './Calendar.style'

type EventInfo = {
  timeText: string
  event: {
    title: string
  }
}

type Event = {
  title: string
  start?: string
  end?: string
  date?: string
}

type CalendarProps = {
  events: Event[]
}

const Calendar = ({ events }: CalendarProps) => {
  const renderEventContent = (eventInfo: EventInfo) => {
    return (
      <Box padding="5px">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </Box>
    )
  }

  const handleSelectedDate = () => {}
  return (
    <>
      <CalendarStyle>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          selectable
          eventColor="#B9EDDD"
          eventTextColor="#577D86"
          eventContent={renderEventContent}
          editable
          eventResizableFromStart
          eventDurationEditable
          select={handleSelectedDate}
        />
      </CalendarStyle>
    </>
  )
}

export default Calendar
