import { useQuery } from '@tanstack/react-query'
import schoolService from '../services/school.service'
import { useMemo } from 'react'

const useGetSchools = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['schools'],
    queryFn: schoolService.all
  })

  const schools = useMemo(() => data?.data, [data])
  return {
    schools,
    status,
    error,
    isFetching
  }
}

export default useGetSchools
