import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'

const useGetTeacher = (schoolId: string, teacherId: string) => {
  const { data, status, error, isFetching } = useQuery(['users', schoolId, teacherId], () =>
    teacherService.getTeacher(schoolId, teacherId)
  )

  const teacher = teacherResponseToData(data?.data)
  return {
    teacher,
    status,
    error,
    isFetching
  }
}

export default useGetTeacher
