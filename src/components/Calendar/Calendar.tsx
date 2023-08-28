import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import CalendarStyle from './Calendar.style'
import { IEvent, IEventContent, IEventInfo } from './types/event'

interface ICalendarProps {
  events?: IEvent[]
  renderEventContent: (eventInfo: IEventInfo) => JSX.Element
  handleSelectedDate: (eventContent: IEventContent) => void
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
