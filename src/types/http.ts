export interface IResponse<T> {
  data: T
}

export interface IResponseMeta {
  current_offset: number
  current_page: number
  pages: number
  size: number
  total: number
}

export interface IArrayResponse<T> {
  data: T[]
  meta: IResponseMeta
}

export interface IQueryParams {
  page?: string
  pageSize?: string
}
