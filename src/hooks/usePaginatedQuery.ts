import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useState } from 'react'
import { IQueryParams, IArrayResponse } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'
import { HttpStatus } from '~/constant/http'

interface IUsePaginatedQueryOptions<TData, TError = unknown, TTransformed = TData>
  extends Omit<UseQueryOptions<IArrayResponse<TData>, TError>, 'queryKey' | 'queryFn'> {
  queryKey: unknown[]
  queryFn: (params: IQueryParams) => Promise<IArrayResponse<TData>>
  transformData?: (data: TData[]) => TTransformed[]
}

interface IUsePaginatedQueryResult<TData, TError = unknown, TTransformed = TData> {
  data: TTransformed[]
  meta: ReturnType<typeof metaConverter>
  status: UseQueryResult<IArrayResponse<TData>, TError>['status']
  error: UseQueryResult<IArrayResponse<TData>, TError>['error']
  isLoading: boolean
  currentPage: number
  setCurrentPage: (page: number) => void
}

const usePaginatedQuery = <TData, TError = unknown, TTransformed = TData>(
  options: IUsePaginatedQueryOptions<TData, TError, TTransformed>
): IUsePaginatedQueryResult<TData, TError, TTransformed> => {
  const { queryKey, queryFn, transformData, ...queryOptions } = options
  const [currentPage, setCurrentPage] = useState(1)

  const defaultParams = currentPage === 0 ? {} : { page: currentPage.toString() }
  const queryParams = { ...defaultParams }

  const queryResult = useQuery<IArrayResponse<TData>, TError>({
    queryKey: [...queryKey, queryParams],
    queryFn: () => queryFn(queryParams),
    keepPreviousData: true,
    ...queryOptions
  })

  const { data, status, error } = queryResult

  const transformedData = data?.data
    ? transformData
      ? transformData(data.data)
      : (data.data as unknown as TTransformed[])
    : []
  const meta = metaConverter(data?.meta)
  const isLoading = status === HttpStatus.loading

  return {
    data: transformedData,
    meta,
    status,
    error,
    isLoading,
    currentPage,
    setCurrentPage
  }
}

export default usePaginatedQuery
