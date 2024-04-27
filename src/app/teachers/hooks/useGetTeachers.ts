import { useQuery } from '@tanstack/react-query'
import { IQueryParams } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'

import teacherService from '../services/teacher.service'
import { teacherDetailsConverter } from '../helpers/converter'

const useGetTeachers = (schoolId: string, params: IQueryParams) => {
  const { page } = params

  const { data, status, error, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => teacherService.allTeachers(schoolId, params),
    keepPreviousData: true
  })

  const teachers = data?.data ? data?.data.map((teacher) => teacherDetailsConverter(teacher)) : []
  const meta = metaConverter(data?.meta)
  return {
    teachers,
    meta,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
