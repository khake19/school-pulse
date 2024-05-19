import { get, post, put, remove } from '~/utils/http'
import { ITeacherResponse, TTeacherPayload } from '../types/teachers'
import { IResponse, IQueryParams, IArrayResponse } from '~/types/http'

const allTeachers = async (schoolId: string, params?: IQueryParams): Promise<IArrayResponse<ITeacherResponse>> => {
  const result = await get<IArrayResponse<ITeacherResponse>>(
    `/api/schools/${schoolId}/teachers?` + new URLSearchParams({ ...params })
  )
  return result
}

const createTeacher = async (schoolId: string, body: TTeacherPayload) => {
  const result = await post(`/api/schools/${schoolId}/teachers`, { teacher: body })
  return result
}

const getTeacher = async (schoolId: string, teacherId: string): Promise<IResponse<ITeacherResponse>> => {
  const result = await get<IResponse<ITeacherResponse>>(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const updateTeacher = async (schoolId: string, teacherId: string, body: any) => {
  const result = await put(`/api/schools/${schoolId}/teachers/${teacherId}`, body)
  return result
}

const removeTeacher = async (schoolId: string, teacherId: string) => {
  const result = await remove(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const teacherService = { allTeachers, createTeacher, getTeacher, updateTeacher, removeTeacher }

export default teacherService
