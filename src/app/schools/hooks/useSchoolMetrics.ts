import { useQuery } from '@tanstack/react-query'
import schoolService from '../services/school.service'

const useSchoolMetrics = (schoolId: string) => {
  const { data, status, error, isFetching } = useQuery(
    ['school-metrics', schoolId],
    () => schoolService.schoolMetrics(schoolId),
    { enabled: !!schoolId }
  )

  return {
    data: data?.data,
    status,
    error,
    isFetching
  }
}

export default useSchoolMetrics
