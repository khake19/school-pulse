import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import { IQueryParams } from '~/types/http'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse, TTeacherData } from '../types/teachers'
import { useMemo } from 'react'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'

const useGetTeachers = (params: Omit<IQueryParams, 'page'>) => {
  const school = useCurrentSchool((state) => state.school)
  const stableParams = useMemo(() => JSON.stringify(params), [JSON.stringify(params)])

  const result = usePaginatedQuery<ITeacherResponse, unknown, TTeacherData>({
    queryKey: ['users', school?.id, stableParams],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...params })
      const queryString = new URLSearchParams(sanitizedParams as Record<string, string>).toString()
      return teacherService.allTeachers(school.id, queryString)
    },
    enabled: !!school?.id,
    transformData: (data) => data.map((teacher) => teacherResponseToData(teacher))
  })

  return {
    ...result,
    teachers: result.data
  }
}

export default useGetTeachers
