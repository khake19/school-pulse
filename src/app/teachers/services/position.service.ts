import { get } from '~/utils/http'
import { IPositionResponse } from '../types/teachers'
import { IResponse } from '~/types/http'

const allPositions = async (): Promise<IResponse<IPositionResponse[]>> => {
  const result = await get<IResponse<IPositionResponse[]>>(`/api/positions`)
  return result
}

const positionService = { allPositions }

export default positionService
