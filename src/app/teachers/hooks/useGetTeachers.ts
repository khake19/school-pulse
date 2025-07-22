import usePaginatedQuery from '~/hooks/usePaginatedQuery'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import teacherService from '../services/teacher.service'
import { filtersToQueryParams, teacherResponseToData } from '../helpers/converter'
import { ITeacherResponse, TTeacherData } from '../types/teachers'
import useFilterStore from './useFilterStore'
import { buildQueryParams } from '~/utils/queryParamBuilder'

const useGetTeachers = () => {
  const schoolId = useCurrentSchool((state) => state.school.id)
  const filters = useFilterStore((state) => state.teachers.filters)

  const filterQuery = filtersToQueryParams({ positions: filters?.positions })

  const result = usePaginatedQuery<ITeacherResponse, unknown, TTeacherData>({
    queryKey: ['users', [schoolId, filters]],
    queryFn: async (queryParams) => {
      const queryString = buildQueryParams({ ...queryParams, ...filterQuery })
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
