import { get } from '~/utils/http'
import { ISchool } from '../types/schools'
import { IArrayResponse } from '~/types/http'

const all = async (): Promise<IArrayResponse<ISchool>> => {
  const result = await get<IArrayResponse<ISchool>>('/api/schools')
  return result
}

const teacherService = { all }

export default teacherService
