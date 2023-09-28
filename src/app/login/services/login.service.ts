import { post } from '~/utils/http'
import { ILoginParams, ILoginResponse } from '../types/login'

const login = async (params: ILoginParams): Promise<ILoginResponse> => {
  const result = await post<ILoginResponse, ILoginParams>(process.env.NEXT_PUBLIC_CLIENT_URL + '/api/login', params)
  return result
}

const loginService = { login }

export default loginService
