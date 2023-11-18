import { QueryFunctionContext } from '@tanstack/react-query'
import { get } from '~/utils/http'
import { ITeacher } from '../types/teachers'
import { IArrayResponse } from '~/types/http'

const all = async ({
  queryKey
}: QueryFunctionContext<[string, string | null | undefined]>): Promise<IArrayResponse<ITeacher>> => {
  const [, schoolId] = queryKey

  const result = await get<IArrayResponse<ITeacher>>(`/api/schools/${schoolId}/teachers`)
  return result
}

const teacherService = { all }

export default teacherService
