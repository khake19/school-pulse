import { useQuery } from '@tanstack/react-query'
import { IQueryParams } from '~/types/http'
import metaConverter from '~/helpers/metaConverter'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { HttpStatus } from '~/constant/http'

const useGetTeachers = (params: IQueryParams) => {
  const { page } = params
  const school = useCurrentSchool((state) => state.school)

  const { data, status, error } = useQuery({
    queryKey: ['users', page],
    queryFn: () => teacherService.allTeachers(school.id, params),
    enabled: !!school?.id,
    keepPreviousData: true
  })

  const teachers = data?.data ? data?.data.map((teacher) => teacherResponseToData(teacher)) : []
  const meta = metaConverter(data?.meta)
  const isLoading = status === HttpStatus.loading

  return {
    teachers,
    meta,
    status,
    error,
    isLoading
  }
}

export default useGetTeachers
