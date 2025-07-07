import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import documentService from '~/app/documents/services/document.service'
import { IDocumentResponse, TDocumentData } from '~/app/documents/types/documents'
import { documentToData, filtersToQueryParams } from '~/app/documents/helpers/converter'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'

const useGetDocuments = (schoolId: string, teacherId: string) => {
  const filterQuery = filtersToQueryParams({ teacherId })
  const result = usePaginatedQuery<IDocumentResponse, unknown, TDocumentData>({
    queryKey: ['teacher-documents', teacherId, schoolId],
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
