import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'

const useGetTeachers = (schoolId: string) => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['users', schoolId],
    queryFn: teacherService.all
  })

  return {
    teachers: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
