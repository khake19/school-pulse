import { useQuery } from '@tanstack/react-query'
import leaveService from '../services/leave.service'
import { IArrayResponse } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'
import { HttpStatus } from '~/constant/http'
import { ILeaveResponse } from '../types/leaves'
import { ILeaveFilters } from '../types/filters'
import { leaveResponseToData } from '../helpers/converter'
import filtersToPayload from '../helpers/filter'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'

const useGetLeaves = (schoolId: string, filters?: ILeaveFilters) => {
  const leaveFilters = filtersToPayload(filters)
  const { data, status, error } = useQuery<IArrayResponse<ILeaveResponse>, Error>({
    queryKey: ['leaves', filters],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...leaveFilters })
      const queryString = new URLSearchParams(sanitizedParams).toString()
      return leaveService.getLeaves(schoolId, queryString)
    },
    enabled: !!schoolId,
    keepPreviousData: true
  })

  const documents = leaveResponseToData(data)
  const meta = metaConverter(data?.meta)
  const isLoading = status === HttpStatus.loading

  return {
    data: documents,
    meta,
    status,
    error,
    isLoading
  }
}

export default useGetLeaves
