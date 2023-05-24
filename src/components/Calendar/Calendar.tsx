import React from 'react'
import { Box } from '@chakra-ui/react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import CalendarStyle from './Calendar.style'
import { JsxElement } from 'typescript'

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
  renderEventContent: (eventInfo: EventInfo) => JSX.Element
}

const Calendar = ({ events, renderEventContent }: CalendarProps) => {
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
