import { get } from '~/utils/http'
import { ITeachers } from '../types/teachers'

const getTeachers = async () => {
  const result = await get<ITeachers>('/users')
  return result
}

export { getTeachers }
