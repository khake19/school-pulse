import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse, TTeacherData } from '../types/teachers'
import sanitizeQueryParams from '~/helpers/sanitizeQueryParams'
import useFilterStore from './useFilterStore'

const useGetTeachers = () => {
  const schoolId = useCurrentSchool((state) => state.school.id)
  const filters = useFilterStore((state) => state.teachers.filters)
  const result = usePaginatedQuery<ITeacherResponse, unknown, TTeacherData>({
    queryKey: ['users', [schoolId, filters]],
    queryFn: async (queryParams) => {
      const sanitizedParams = sanitizeQueryParams({ ...queryParams, ...filters })
      const queryString = new URLSearchParams(sanitizedParams as Record<string, string>).toString()
      return teacherService.allTeachers(schoolId, queryString)
    },
    enabled: !!schoolId,
    transformData: (data) => data.map((teacher) => teacherResponseToData(teacher))
  })

  return {
    ...result,
    teachers: result.data
  }
}

export default useGetTeachers
