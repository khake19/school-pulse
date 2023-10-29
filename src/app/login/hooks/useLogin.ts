import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'

import loginService from '../services/login.service'
import { ILoginParams, ILoginResponse } from '../types/login'

const useLogin = (options?: UseMutationOptions<ILoginResponse, unknown, unknown>) => {
  const { mutateAsync, isLoading: isLoggingIn, isError, isSuccess } = useMutation(loginService.login, options)
  const login = async (params: ILoginParams) => {
    try {
      await mutateAsync(params)
    } catch (error) {
      console.log('error', error)
    }
  }

  if (isSuccess) {
    redirect('/')
  }

  return { login, isLoggingIn, isError, isSuccess }
}

export default useLogin
