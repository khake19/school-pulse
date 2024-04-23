import { useQuery } from '@tanstack/react-query'
import { IQueryParams } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'

import teacherService from '../services/teacher.service'

const useGetTeachers = (schoolId: string, params: IQueryParams) => {
  const { page } = params

  const { data, status, error, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => teacherService.allTeachers(schoolId, params),
    keepPreviousData: true
  })

  console.log('data', data?.meta)
  const meta = metaConverter(data?.meta)
  console.log('meta', meta)
  return {
    teachers: data?.data,
    meta,
    status,
    error,
    isFetching
  }
}

export default useGetTeachers
