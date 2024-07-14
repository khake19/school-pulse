import { useQuery, UseQueryResult } from '@tanstack/react-query'
import documentService from '../services/document.service'
import { IDocumentResponse } from '../types/documents'
import { IArrayResponse } from '~/types/http'
import { IDocumentFilters } from '../types/filters'
import { documentResponseToData } from '../helpers/converter'

const useGetDocuments = (schoolId: string, filters?: IDocumentFilters) => {
  const { data, status, error, isFetching } = useQuery<IArrayResponse<IDocumentResponse>, Error>({
    queryKey: ['users', filters],
    queryFn: () => documentService.getDocuments(schoolId, filters),
    enabled: !!schoolId,
    keepPreviousData: true
  })

  const documents = documentResponseToData(data)
  return {
    data: documents,
    error,
    status,
    isFetching
  }
}

export default useGetDocuments
