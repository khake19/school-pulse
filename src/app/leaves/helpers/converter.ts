import { IArrayResponse } from '~/types/http'
import { TLeaveFormInput, TLeavePayload } from '../schema/leave'
import { ILeaveResponse } from '../types/leaves'
import { format, parseISO } from 'date-fns'
import { DateTime } from '~/constant/date'

export const leaveFormToPayload = (form: TLeaveFormInput): TLeavePayload => {
  return {
    teacher_id: form.teacherId,
    remarks: form.remarks,
    type: form.type,
    start_at: format(new Date(form.startAt) ?? new Date(), DateTime.dashDateTimeFormat),
    end_at: format(new Date(form.endAt) ?? new Date(), DateTime.dashDateTimeFormat)
  }
}

export const leaveResponseToData = (leaves: IArrayResponse<ILeaveResponse> | undefined) => {
  const data =
    leaves?.data.map((leave) => ({
      allDay: true,
      title: leave.remarks,
      start: parseISO(leave.start_at ?? ''),
      end: parseISO(leave.end_at ?? ''),
      id: leave.id,
      remarks: leave.remarks,
      type: leave.type,
      teacherId: leave.user.id
    })) ?? []

  return data
}
