import { get } from '~/utils/http'
import { ICurrentUserResponse } from '../types/auth'
import { IResponse } from '~/types/http'

const currentUser = (): Promise<IResponse<ICurrentUserResponse>> => {
  const result = get<IResponse<ICurrentUserResponse>>('/api/auth/me')
  return result
}

const authService = { currentUser }

export default authService
