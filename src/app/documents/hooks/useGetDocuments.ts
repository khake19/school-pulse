import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import documentService from '../services/document.service'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import { documentToData, filtersToQueryParams } from '../helpers/converter'

import useFilterStore from './useFilterStore'
import { buildQueryParams } from '~/utils/queryParamBuilder'

const useGetDocuments = (schoolId: string) => {
  const filters = useFilterStore((state) => state.documents.filters)

  const result = usePaginatedQuery<IDocumentResponse, unknown, TDocumentData>({
    queryKey: ['documents', schoolId, { filters }],
    queryFn: async (queryParams) => {
      const filterQuery = filtersToQueryParams(filters)
      const queryString = buildQueryParams({ ...filterQuery, ...queryParams })

      const res = await documentService.getDocuments(schoolId, queryString)
      return res
    },
    enabled: !!schoolId,
    transformData: (data) => data.map(documentToData)
  })

  return {
    ...result,
    data: result.data
  }
}

export default useGetDocuments
