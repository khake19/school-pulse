import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'

const useGetTeacher = (schoolId: string, teacherId: string) => {
  const { data, status, error, isFetching } = useQuery(['users', schoolId, teacherId], () =>
    teacherService.getTeacher(schoolId, teacherId)
  )

  return {
    teacher: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetTeacher
