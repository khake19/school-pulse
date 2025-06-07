import { IQueryParams } from '~/types/http'

export interface ILeaveFilters extends IQueryParams {
  teacher_id?: string
  start?: Date
  end?: Date
}
