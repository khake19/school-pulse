import { post, get } from '~/utils/http'
import { ILoginParams } from '../types/login'

const login = async (params: ILoginParams) => {
  const result = await post('api/login', JSON.stringify(params))
  return result
}

const logout = async (options: object) => {
  const result = await get(process.env.SERVER_URL + '/api/auth/sign_out', options)
  return result
}

const loginService = { login, logout }

export default loginService
