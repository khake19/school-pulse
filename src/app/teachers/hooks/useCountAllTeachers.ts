import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'

const useCountAllTeachers = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['teachers-count'],
    queryFn: teacherService.countAllTeachers
  })

  return {
    data: data?.data,
    status,
    error,
    isFetching
  }
}

export default useCountAllTeachers
