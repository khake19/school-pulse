import { IQueryParams } from '~/types/http'

export interface IDocumentFilters extends IQueryParams {
  users?: string[]
  documentType?: any
}
