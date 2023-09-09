import { get } from '~/utils/http'
import { ITeacher } from '../types/teachers'
import { IArrayResponse } from '~/types/http'

const all = async (): Promise<IArrayResponse<ITeacher>> => {
  const result = await get<IArrayResponse<ITeacher>>('/users')
  return result
}

const teacherService = { all }

export default teacherService
