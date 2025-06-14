import { useCallback, useState, memo, useEffect } from 'react'
import { Calendar, dateFnsLocalizer, Views, Event, DateRange, SlotInfo, View } from 'react-big-calendar'
import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'
import { startOfWeek } from 'date-fns/startOfWeek'
import { getDay } from 'date-fns/getDay'
import { enUS } from 'date-fns/locale/en-US'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useToken } from '@chakra-ui/react'

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
  handleRangeChange: (range: DateRange | Date[]) => void
}

const BaseCalendar = memo(
  (props: IBaseCalendarProps) => {
    const { events = [], handleSelectEvent, handleSelectSlot, handleRangeChange } = props
    const [date, setDate] = useState(new Date())
    const [view, setView] = useState<View>(Views.MONTH)
    const [brand500] = useToken('colors', ['brand.500'])

    const onView = useCallback((newView: View) => setView(newView), [setView])

    const onNavigate = useCallback((date: Date) => {
      setDate(new Date(date))
    }, [])

    const eventPropGetter = useCallback(
      (event: Event) => ({
        style: {
          backgroundColor: brand500
        }
      }),
      [brand500]
    )

    const onShowMore = useCallback(() => console.log('hello'), [])

    return (
      <Calendar
        views={[Views.MONTH, Views.DAY]}
        onView={onView}
        view={view}
        localizer={localizer}
        date={date}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        onNavigate={onNavigate}
        style={{ height: '100%' }}
        eventPropGetter={eventPropGetter}
        onRangeChange={handleRangeChange}
        onShowMore={onShowMore}
      />
    )
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    const eventsChanged =
      prevProps.events.length !== nextProps.events.length ||
      prevProps.events.some((event, index) => {
        const nextEvent = nextProps.events[index]
        return (
          !nextEvent ||
          event.start?.getTime() !== nextEvent.start?.getTime() ||
          event.end?.getTime() !== nextEvent.end?.getTime() ||
          event.title !== nextEvent.title
        )
      })

    // Only re-render if events actually changed
    return !eventsChanged
  }
)

BaseCalendar.displayName = 'BaseCalendar'

export default BaseCalendar
