import { get, post, put } from '~/utils/http'
import { ITeacher } from '../types/teachers'
import { IResponse } from '~/types/http'
import { TTeacherFormInput } from '../schema/teachers'

const all = async (schoolId: string): Promise<IResponse<ITeacher[]>> => {
  const result = await get<IResponse<ITeacher[]>>(`/api/schools/${schoolId}/teachers`)
  return result
}

const create = async (schoolId: string, body: TTeacherFormInput) => {
  const result = await post(`api/schools/${schoolId}/teachers`, { teacher: body })
  return result
}

const getOne = async (schoolId: string, teacherId: string): Promise<IResponse<ITeacher>> => {
  const result = await get<IResponse<ITeacher>>(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const update = async (schoolId: string, teacherId: string, body: TTeacherFormInput) => {
  const result = await put(`api/schools/${schoolId}/teachers/${teacherId}`, { teacher: body })
  return result
}

const teacherService = { all, create, getOne, update }

export default teacherService
