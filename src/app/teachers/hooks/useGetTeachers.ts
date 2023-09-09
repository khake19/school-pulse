import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'

const useGetTeachers = () => {
  const {
    data,
    status,
    error,
    isFetching
  } = useQuery({
    queryKey: ['users'],
    queryFn: teacherService.all,
  })

  return {
    teachers: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
