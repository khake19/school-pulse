import { IArrayResponse, IQueryParams } from '~/types/http'
import { post, get, put } from '~/utils/http'
import { ILeaveResponse } from '../types/leaves'
import { IResponse } from '~/types/http'

const createLeave = async (schoolId: string, body: any) => {
  const result = await post(`/api/schools/${schoolId}/leaves`, JSON.stringify(body))
  return result
}

const getLeaves = async (schoolId: string, params?: IQueryParams): Promise<IArrayResponse<ILeaveResponse>> => {
  const result = await get<IArrayResponse<ILeaveResponse>>(
    `/api/schools/${schoolId}/leaves?` + new URLSearchParams({ ...params })
  )
  return result
}

const updateLeave = async (schoolId: string, leaveId: string, body: any): Promise<IResponse<ILeaveResponse>> => {
  const result = await put<IResponse<ILeaveResponse>, Object>(
    `/api/schools/${schoolId}/leaves/${leaveId}`,
    JSON.stringify(body)
  )
  return result
}
const leaveService = { createLeave, getLeaves, updateLeave }

export default leaveService
