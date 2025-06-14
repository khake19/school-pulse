import { startOfDay } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { DateTime } from '~/constant/date'
import { ILeaveFilters } from '../types/filters'
import { IQueryParams } from '~/types/http'

interface IFilterPayload extends IQueryParams {
  teacher_id?: string
  start_at?: string
  end_at?: string
}

const filtersToPayload = (filters: ILeaveFilters | undefined): IFilterPayload => {
  const payload: IFilterPayload = {}

  if (filters?.teacher_id) {
    payload.teacher_id = filters.teacher_id
  }

  if (filters?.start) {
    payload.start_at = formatInTimeZone(startOfDay(filters.start), DateTime.timezone, DateTime.dashDateTimeFormat)
  }
  if (filters?.end) {
    payload.end_at = formatInTimeZone(startOfDay(filters.end), DateTime.timezone, DateTime.dashDateTimeFormat)
  }

  return payload
}

export default filtersToPayload
