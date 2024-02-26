import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'

const useGetTeachers = (schoolId: string) => {
  const { data, status, error, isFetching } = useQuery(
    ['users', schoolId],
    () => teacherService.all(schoolId)
  )

  return {
    teachers: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
