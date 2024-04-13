export interface IResponse<T> {
  data: T
}

export interface IResponseMeta {
  current_offset: number
  current_page: number
  size: number
  total: number
  pages: number
}

export interface IArrayResponse<T> {
  data: T[]
  meta: IResponseMeta
}

export interface IQueryParams {
  page?: string
  pageSize?: string
}
