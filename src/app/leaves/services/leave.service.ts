import { IArrayResponse } from '~/types/http'
import { post, get, put, remove } from '~/utils/http'
import { ILeaveResponse, TLeavePayload } from '../types/leaves'
import { IResponse } from '~/types/http'

const createLeave = async (schoolId: string, body: TLeavePayload): Promise<IResponse<ILeaveResponse>> => {
  const result = await post<IResponse<ILeaveResponse>, string>(`/api/schools/${schoolId}/leaves`, JSON.stringify(body))
  return result
}

const getLeaves = async (schoolId: string, params?: string): Promise<IArrayResponse<ILeaveResponse>> => {
  const result = await get<IArrayResponse<ILeaveResponse>>(`/api/schools/${schoolId}/leaves?` + params)
  return result
}

const updateLeave = async (
  schoolId: string,
  leaveId: string,
  body: TLeavePayload
): Promise<IResponse<ILeaveResponse>> => {
  const result = await put<IResponse<ILeaveResponse>, any>(
    `/api/schools/${schoolId}/leaves/${leaveId}`,
    JSON.stringify(body)
  )
  return result
}

const removeLeave = async (schoolId: string, leaveId: string) => {
  const result = await remove(`/api/schools/${schoolId}/leaves/${leaveId}`)
  return result
}
const leaveService = { createLeave, getLeaves, updateLeave, removeLeave }

export default leaveService
