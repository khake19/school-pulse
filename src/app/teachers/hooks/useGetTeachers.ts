import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import { IQueryParams } from '~/types/http'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse, TTeacherData } from '../types/teachers'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'
import useFilterStore from './useFilterStore'

const useGetTeachers = () => {
  const school = useCurrentSchool((state) => state.school)
  const filters = useFilterStore((state) => state.teachers.filters)

  const result = usePaginatedQuery<ITeacherResponse, unknown, TTeacherData>({
    queryKey: ['users', school?.id, JSON.stringify(filters)],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...filters })
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
