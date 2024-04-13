import { useQuery } from '@tanstack/react-query'
import schoolService from '../services/school.service'

const useGetSchools = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['schools'],
    queryFn: schoolService.all
  })

  return {
    schools: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetSchools
