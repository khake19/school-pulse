import { get } from '~/utils/http'
import { IPosition } from '../types/teachers'
import { IResponse } from '~/types/http'

const allPositions = async (): Promise<IResponse<IPosition[]>> => {
  const result = await get<IResponse<IPosition[]>>(`/api/positions`)
  return result
}

const positionService = { allPositions }

export default positionService
