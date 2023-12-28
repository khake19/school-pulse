import { get } from '~/utils/http'
import { IPosition } from '../types/teachers'
import { IArrayResponse } from '~/types/http'

const all = async (): Promise<IArrayResponse<IPosition>> => {
  const result = await get<IArrayResponse<IPosition>>(`/api/positions`)
  return result
}

const positionService = { all }

export default positionService
