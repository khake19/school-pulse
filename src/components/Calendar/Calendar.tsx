import { useState } from 'react'
import { Calendar, dateFnsLocalizer, Views, Event, DateRange, SlotInfo } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

interface IBaseCalendarProps {
  events: Event[]
  handleSelectSlot: (slot: SlotInfo) => void
  handleSelectEvent: (event: Event) => void
}

const BaseCalendar = (props: IBaseCalendarProps) => {
  const { events = [], handleSelectEvent, handleSelectSlot } = props
  const [date, setDate] = useState(new Date())

  return (
    <Calendar
      views={[Views.MONTH]}
      localizer={localizer}
      date={date}
      events={events}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={handleSelectEvent}
      onSelectSlot={handleSelectSlot}
      selectable
      onNavigate={(date) => {
        setDate(new Date(date))
      }}
      style={{ height: '100%' }}
    />
  )
}

export default BaseCalendar
