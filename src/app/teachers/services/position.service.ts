import { get } from '~/utils/http'
import { IPosition } from '../types/teachers'
import { IResponse } from '~/types/http'

const all = async (): Promise<IResponse<IPosition[]>> => {
  const result = await get<IResponse<IPosition[]>>(`/api/positions`)
  return result
}

const positionService = { all }

export default positionService
