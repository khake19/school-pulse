import { useQuery } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse } from '../types/teachers'
import { IResponse } from '~/types/http'

const useGetTeacher = (schoolId: string, teacherId: string) => {
  const { data, status, error, isFetching } = useQuery<IResponse<ITeacherResponse>>({
    queryKey: ['users', schoolId, teacherId],
    queryFn: () => teacherService.getTeacher(schoolId, teacherId),
    enabled: !!schoolId,
    keepPreviousData: true
  })

  const teacher = teacherResponseToData(data?.data)
  return {
    teacher,
    status,
    error,
    isFetching
  }
}

export default useGetTeacher
