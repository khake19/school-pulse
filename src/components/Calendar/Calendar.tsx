import React from 'react'
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
  renderEventContent: (eventInfo: EventInfo) => JSX.Element
  handleSelectedDate: (eventContent: EventContent) => void
}

type EventContent = {
  start: Date
  end: Date
  startStr: string
  endStr: string
}

const Calendar = ({ events, renderEventContent, handleSelectedDate }: CalendarProps) => {
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
