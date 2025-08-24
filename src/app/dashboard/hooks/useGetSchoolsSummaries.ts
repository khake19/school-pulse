import schoolService from '~/app/schools/services/school.service'
import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import { buildQueryParams } from '~/utils/queryParamBuilder'
import { schoolSumarriesResponseToData } from '../helpers/converter'
import { ISchoolSummariesResponse, TSchoolSummariesData } from '../types/dashboard'
import { useCallback } from 'react'

const useGetSchoolsSummaries = (params?: any) => {
  const result = usePaginatedQuery<ISchoolSummariesResponse, unknown, TSchoolSummariesData>({
    queryKey: ['schools-summaries'],
    queryFn: async (queryParams) => {
      const queryString = buildQueryParams({ ...queryParams })
      return schoolService.allSchoolsSummaries(queryString)
    },
    transformData: useCallback(
      (data: ISchoolSummariesResponse[]) => data.map((school) => schoolSumarriesResponseToData(school)),
      []
    )
  })

  return result
}

export default useGetSchoolsSummaries
