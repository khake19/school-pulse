import { get } from '~/utils/http'
import { ITeachers } from '../types/teachers'

const getTeachers = async () => {
  const { data } = await get<ITeachers>('/users')
  return data
}

export { getTeachers }
