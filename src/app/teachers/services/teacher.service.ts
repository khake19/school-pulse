import { get, post } from '~/utils/http'
import { ITeacher } from '../types/teachers'
import { IArrayResponse } from '~/types/http'
import { TTeacherFormInput } from '../schema/teachers'

const all = async (schoolId: string): Promise<IArrayResponse<ITeacher>> => {
  const result = await get<IArrayResponse<ITeacher>>(`/api/schools/${schoolId}/teachers`)
  return result
}

const create = async (schoolId: string, body: TTeacherFormInput ) => {
  const result = await post(`api/schools/${schoolId}/teachers`, body)
  return result
}

const teacherService = { all, create }

export default teacherService
