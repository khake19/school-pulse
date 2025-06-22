import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import documentService from '../services/document.service'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import { IDocumentFilters } from '../types/filters'
import { documentToData } from '../helpers/converter'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'

const useGetDocuments = (schoolId: string, filters?: Omit<IDocumentFilters, 'page'>) => {
  const result = usePaginatedQuery<IDocumentResponse, unknown, TDocumentData>({
    queryKey: ['documents'],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...filters })
      const queryString = new URLSearchParams(sanitizedParams as Record<string, string>).toString()
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
