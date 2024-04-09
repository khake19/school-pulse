import { useQuery } from '@tanstack/react-query'
import { IQueryParams } from '~/types/http'
import teacherService from '../services/teacher.service'

const useGetTeachers = (schoolId: string, params: IQueryParams) => {
  const { page } = params

  const { data, status, error, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => teacherService.allTeachers(schoolId, params),
    keepPreviousData: true
  })

  return {
    teachers: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
