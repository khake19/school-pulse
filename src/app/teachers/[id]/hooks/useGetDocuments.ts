import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import documentService from '~/app/documents/services/document.service'
import { IDocumentResponse, TDocumentData } from '~/app/documents/types/documents'
import { documentToData, filtersToQueryParams } from '~/app/documents/helpers/converter'
import { buildQueryParams } from '~/utils/queryParamBuilder'

const useGetDocuments = (schoolId: string, teacherId: string) => {
  const filterQuery = filtersToQueryParams({ teachers: [teacherId] })

  const result = usePaginatedQuery<IDocumentResponse, unknown, TDocumentData>({
    queryKey: ['teacher-documents', teacherId, schoolId],
    queryFn: async (queryParams) => {
      // Use the global helper to build the query string
      const queryString = buildQueryParams({ ...queryParams, ...filterQuery })

      const res = await documentService.getDocuments(schoolId, queryString)
      return res
    },
    enabled: !!teacherId,
    transformData: (data) => data.map(documentToData)
  })

  return {
    ...result,
    data: result.data
  }
}

export default useGetDocuments
