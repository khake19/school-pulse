import { format } from 'date-fns'
import { useState } from 'react'
import { DateTime } from '~/constant/date'
import { ILeaveEventData } from '../types/leaves'

interface ISlotEventProps {
  start?: Date | undefined
  end?: Date | undefined
  teacherId?: string
  type?: string
  remarks?: string
  id?: string
}

const useSlotEvent = () => {
  const [event, setEvent] = useState<ILeaveEventData | undefined>()
  const [editMode, setEditMode] = useState<boolean>(false)

  const createEvent = (slotEvent: ISlotEventProps) => {
    const now = new Date()
    const start = format(slotEvent.start ?? now, DateTime.dashDateFormat)
    const end = format(slotEvent.end ?? now, DateTime.dashDateFormat)

    const isEdit = !!slotEvent.teacherId
    setEditMode(isEdit)

    setEvent({
      start,
      end,
      remarks: slotEvent?.remarks,
      teacherId: slotEvent?.teacherId,
      type: slotEvent?.type,
      id: slotEvent?.id
    })
  }

  return {
    event,
    createEvent,
    editMode
  }
}

export default useSlotEvent
