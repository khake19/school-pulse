import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import documentService from '../services/document.service'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import { IDocumentFilters } from '../types/filters'
import { documentToData, filtersToQueryParams } from '../helpers/converter'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'
import useFilterStore from './useFilterStore'

const useGetDocuments = (schoolId: string) => {
  const filters = useFilterStore((state) => state.documents.filters)
  const filterQuery = filtersToQueryParams(filters)
  const result = usePaginatedQuery<IDocumentResponse, unknown, TDocumentData>({
    queryKey: ['documents', JSON.stringify(filters)],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...filterQuery })
      const queryString = new URLSearchParams(sanitizedParams).toString()
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
