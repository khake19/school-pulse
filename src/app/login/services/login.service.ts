import { post } from '~/utils/http'
import { ILoginParams } from '../types/login'

const login = async (params: ILoginParams) => {
  const result = await post('api/login', JSON.stringify(params))
  return result
}

const loginService = { login }

export default loginService
