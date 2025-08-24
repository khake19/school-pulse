import { get } from '~/utils/http'
import { IArrayResponse, IResponse } from '~/types/http'
import { ISchoolSummariesResponse } from '../types/dashboard'

interface ISchoolMetricsResponse {
  schools: number
  teachers: number
  documents: number
  leaves: number
}

const schoolMetrics = async (schoolId: string): Promise<IResponse<ISchoolMetricsResponse>> => {
  const result = await get<IResponse<ISchoolMetricsResponse>>(`/api/schools/${schoolId}/counts`)
  return result
}

const allSchoolsMetrics = async (): Promise<IResponse<ISchoolMetricsResponse>> => {
  const result = await get<IResponse<ISchoolMetricsResponse>>(`/api/schools/counts`)
  return result
}

const allSchoolsSummaries = async (params?: string): Promise<IArrayResponse<ISchoolSummariesResponse>> => {
  const url = `/api/schools/summaries${params}`
  const result = await get<IArrayResponse<ISchoolSummariesResponse>>(url)
  return result
}

const teacherService = { schoolMetrics, allSchoolsMetrics, allSchoolsSummaries }

export default teacherService
