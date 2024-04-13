export interface IResponse<T> {
  data: T
}

export interface IResponseMeta {
  current_offset: number
  current_page: number
  page_size: number
  total_count: number
  total_pages: number
}

export interface IArrayResponse<T> {
  data: T[]
  meta: IResponseMeta
}

export interface IQueryParams {
  page?: string
  pageSize?: string
}
