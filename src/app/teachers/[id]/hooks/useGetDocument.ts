import { useQuery } from '@tanstack/react-query'
import documentService from '../services/document.service'
import { IDocumentResponse } from '../types/documents'
import { IArrayResponse } from '~/types/http'
import { IDocumentFilters } from '../types/filters'
import { documentResponseToData } from '../helpers/converter'
import metaConverter from '~/helpers/metaConverter'
import { HttpStatus } from '~/constant/http'

const useGetDocuments = (schoolId: string, filters?: IDocumentFilters) => {
  const { data, status, error } = useQuery<IArrayResponse<IDocumentResponse>, Error>({
    queryKey: ['documents', filters],
    queryFn: () => documentService.getDocuments(schoolId, filters),
    enabled: !!schoolId,
    keepPreviousData: true
  })

  const documents = documentResponseToData(data)
  const meta = metaConverter(data?.meta)
  const isLoading = status === HttpStatus.loading

  return {
    data: documents.data,
    meta,
    status,
    error,
    isLoading
  }
}

export default useGetDocuments
