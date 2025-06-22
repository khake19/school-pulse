export interface IResponse<T> {
  data: T
}

type MetaDataFieldsResponse = 'current_offset' | 'current_page' | 'pages' | 'size' | 'total'
export type TResponseMeta = Record<MetaDataFieldsResponse, number>

export interface IArrayResponse<T> {
  data: T[]
  meta: TResponseMeta
}

export interface IQueryParams {
  page?: string
  offset?: string
  limit?: string
  filterSearch?: string
  filters?: Record<string, any>
}

type MetaDataFields = 'offset' | 'page' | 'size' | 'total' | 'pages'
export type TMetaData = Record<MetaDataFields, number>
