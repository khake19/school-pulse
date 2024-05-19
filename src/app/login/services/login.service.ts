import { post } from '~/utils/http'
import { ILoginParams, ILoginResponse } from '../types/login'

const login = async (params: ILoginParams): Promise<ILoginResponse> => {
  const result = await post<ILoginResponse, ILoginParams>('/api/login', params)
  return result
}

const loginService = { login }

export default loginService
