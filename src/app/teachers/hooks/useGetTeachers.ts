import { useQuery } from '@tanstack/react-query'
import { IQueryParams } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'

const useGetTeachers = (params: IQueryParams) => {
  const { page } = params
  const school = useCurrentSchool((state) => state.school)

  const { data, status, error, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => teacherService.allTeachers(school.id, params),
    keepPreviousData: true
  })

  const teachers = data?.data ? data?.data.map((teacher) => teacherResponseToData(teacher)) : []
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
