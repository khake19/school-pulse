export interface IResponse<T> {
  data: T
}

export interface IResponseMeta {
  /** The current page number. */
  page: number

  /** The number of items to skip from the beginning of the dataset. */
  offset: number

  /** The number of items per page. */
  pageSize: number

  /** The total number of items across all pages. */
  totalItems: number

  /** The total number of pages based on the pageSize and totalItems. */
  totalPages: number
}

export interface IArrayResponse<T> {
  data: T[]
  meta: IResponseMeta
}

export interface IQueryParams {
  page?: string
  pageSize?: string
}
