import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import CalendarStyle from './Calendar.style'

interface IEventInfo {
  timeText: string
  event: IEvent
}

interface IEvent {
  title: string
  start?: string
  end?: string
  date?: string
}

interface ICalendarProps {
  events?: Event[]
  renderEventContent: (eventInfo: IEventInfo) => JSX.Element
  handleSelectedDate: (eventContent: IEventContent) => void
}

interface IEventContent {
  start: Date
  end: Date
  startStr: string
  endStr: string
}

const Calendar = ({ events, renderEventContent, handleSelectedDate }: ICalendarProps) => {
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
