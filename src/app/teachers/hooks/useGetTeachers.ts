import { useQuery } from '@tanstack/react-query'
import { getTeachers } from '../services/teacher.service'

const useGetTeachers = () => {
  const {
    data: teachers,
    status,
    error,
    isFetching
  } = useQuery({
    queryKey: ['users'],
    queryFn: getTeachers,
    suspense: true
  })
  return {
    teachers,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
