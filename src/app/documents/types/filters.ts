import { IQueryParams } from '~/types/http'

export interface IDocumentFilters extends IQueryParams {
  teacher_id?: string
}
