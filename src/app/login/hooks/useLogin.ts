import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'

import loginService from '../services/login.service'
import { ILoginParams } from '../types/login'

const useLogin = (options?: object) => {
  const { mutateAsync, isLoading: isLoggingIn, isError, isSuccess } = useMutation(loginService.login, options)
  const login = async (params: ILoginParams) => {
    try {
      await mutateAsync(params)
    } catch (error) {}
  }

  if (isSuccess) {
    redirect('/')
  }

  return { login, isLoggingIn, isError, isSuccess }
}

export default useLogin
