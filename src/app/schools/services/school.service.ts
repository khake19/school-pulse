import { get } from '~/utils/http'
import { ISchool } from '../types/schools'
import { IArrayResponse, IResponse } from '~/types/http'
import { ISchoolSummariesResponse } from '~/app/dashboard/types/dashboard'

interface ISchoolMetricsResponse {
  schools: number
  teachers: number
  documents: number
  leaves: number
}

const all = async (): Promise<IArrayResponse<ISchool>> => {
  const result = await get<IArrayResponse<ISchool>>('/api/schools')
  return result
}

const allSchoolsMetrics = async (): Promise<IResponse<ISchoolMetricsResponse>> => {
  const result = await get<IResponse<ISchoolMetricsResponse>>(`/api/schools/counts`)
  return result
}

const allSchoolsSummaries = async (params?: string): Promise<IArrayResponse<ISchoolSummariesResponse>> => {
  const url = `/api/schools/summaries?${params}`
  const result = await get<IArrayResponse<ISchoolSummariesResponse>>(url)
  return result
}

const teacherService = { all, allSchoolsMetrics, allSchoolsSummaries }

export default teacherService
