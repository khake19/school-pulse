import { useQuery } from '@tanstack/react-query'
import schoolService from '../services/school.service'
const useAllSchoolMetrics = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['all-schools-metrics'],
    queryFn: schoolService.allSchoolsMetrics
  })

  return {
    data: data?.data,
    status,
    error,
    isFetching
  }
}

export default useAllSchoolMetrics
