import { get, post, put, remove } from '~/utils/http'
import { ITeacher } from '../types/teachers'
import { IResponse } from '~/types/http'
import { TTeacherFormInput } from '../schema/teachers'

const allTeachers = async (schoolId: string): Promise<IResponse<ITeacher[]> | null> => {
  const result = await get<IResponse<ITeacher[]>>(`/api/schools/${schoolId}/teachers`)
  return result
}

const createTeacher = async (schoolId: string, body: TTeacherFormInput) => {
  const result = await post(`api/schools/${schoolId}/teachers`, { teacher: body })
  return result
}

const getTeacher = async (schoolId: string, teacherId: string): Promise<IResponse<ITeacher> | null> => {
  const result = await get<IResponse<ITeacher>>(`/api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const updateTeacher = async (schoolId: string, teacherId: string, body: TTeacherFormInput) => {
  const result = await put(`api/schools/${schoolId}/teachers/${teacherId}`, { teacher: body })
  return result
}

const removeTeacher = async (schoolId: string, teacherId: string) => {
  const result = await remove(`api/schools/${schoolId}/teachers/${teacherId}`)
  return result
}

const teacherService = { allTeachers, createTeacher, getTeacher, updateTeacher, removeTeacher }

export default teacherService
