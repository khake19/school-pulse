import { useQuery } from '@tanstack/react-query'
import documentService from '../services/document.service'
const useCountSchools = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['documents-count'],
    queryFn: documentService.countAllDocuments
  })

  return {
    data: data?.data,
    status,
    error,
    isFetching
  }
}

export default useCountSchools
