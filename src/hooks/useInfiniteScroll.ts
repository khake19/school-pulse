import { useInfiniteQuery, QueryKey } from '@tanstack/react-query'
import { useMemo } from 'react'
import { IArrayResponse, IQueryParams } from '~/types/http'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

const RECORDS_PER_PAGE = '25'

const useInfiniteScroll = <T, K extends IQueryParams>(
  queryKey: QueryKey,
  queryFn: (id: string, params?: K) => Promise<IArrayResponse<T>>
) => {
  const school = useCurrentSchool((state) => state.school)

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<IArrayResponse<T>>(
    [queryKey],
    ({ pageParam = 0 }) => {
      const defaultParams = { offset: pageParam, limit: RECORDS_PER_PAGE } as unknown as K

      return queryFn(school.id, defaultParams)
    },
    {
      enabled: !!school.id,
      getNextPageParam: (lastPage, allPages): number | undefined => {
        if (!lastPage || !lastPage.meta) return undefined

        const { pages, total } = lastPage.meta

        // Check if there are more pages to fetch
        const totalFetchedItems = allPages.flatMap((page) => page.data).length
        const hasMorePages = pages > allPages.length
        const hasMoreItems = total > totalFetchedItems

        if (hasMorePages || hasMoreItems) {
          // Calculate the next offset based on the total items fetched so far
          return totalFetchedItems
        }
      }
    }
  )

  const fetchedData = useMemo(() => data?.pages.flatMap((page) => page.data), [data?.pages])

  const handleScrollToBottom = () => {
    fetchNextPage()
  }

  return { handleScrollToBottom, fetchedData, isFetching, hasNextPage }
}

export default useInfiniteScroll
