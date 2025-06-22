import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import { IQueryParams } from '~/types/http'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse, TTeacherData } from '../types/teachers'
import { useMemo } from 'react'

const useGetTeachers = (params: Omit<IQueryParams, 'page'>) => {
  const school = useCurrentSchool((state) => state.school)
  const stableParams = useMemo(() => JSON.stringify(params), [JSON.stringify(params)])

  const result = usePaginatedQuery<ITeacherResponse, unknown, TTeacherData>({
    queryKey: ['users', school?.id, stableParams],
    queryFn: (queryParams) => teacherService.allTeachers(school.id, { ...queryParams, ...params }),
    enabled: !!school?.id,
    transformData: (data) => data.map((teacher) => teacherResponseToData(teacher))
  })

  return {
    ...result,
    teachers: result.data
  }
}

export default useGetTeachers
