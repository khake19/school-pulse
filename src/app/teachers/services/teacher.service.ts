import { get, post, put, remove } from '~/utils/http'
import { ITeacherResponse } from '../types/teachers'
import { IResponse, IQueryParams, IArrayResponse } from '~/types/http'

const allTeachers = async (schoolId: string, params?: IQueryParams): Promise<IArrayResponse<ITeacherResponse>> => {
  const queryParams = params
    ? Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== undefined))
    : {}

  const result = await get<IArrayResponse<ITeacherResponse>>(
    `/api/schools/${schoolId}/teachers?` + new URLSearchParams(queryParams)
  )
  return result
}

const createTeacher = async (schoolId: string, body: FormData): Promise<IResponse<ITeacherResponse>> => {
  const result = await post<IResponse<ITeacherResponse>, FormData>(`/api/schools/${schoolId}/teachers`, body)
  return result
}

const getTeacher = async (schoolId: string, teacherId: string): Promise<IResponse<ITeacherResponse>> => {
  const result = await get<IResponse<ITeacherResponse>>(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const updateTeacher = async (
  schoolId: string,
  teacherId: string,
  body: FormData
): Promise<IResponse<ITeacherResponse>> => {
  const result = await put<IResponse<ITeacherResponse>, FormData>(
    `/api/schools/${schoolId}/teachers/${teacherId}`,
    body
  )
  return result
}

const removeTeacher = async (schoolId: string, teacherId: string) => {
  const result = await remove(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const teacherService = { allTeachers, createTeacher, getTeacher, updateTeacher, removeTeacher }

export default teacherService
