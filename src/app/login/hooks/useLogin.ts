import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import useAlert from '~/hooks/useAlert'

import loginService from '../services/login.service'
import { ILoginParams } from '../types/login'
import getErrorMessage from '~/utils/error'

const useLogin = (options?: object) => {
  const alert = useAlert()
  const { mutateAsync, isSuccess } = useMutation(loginService.login, options)
  const login = async (params: ILoginParams) => {
    try {
      await mutateAsync(params)
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  if (isSuccess) {
    redirect('/')
  }

  return { login }
}

export default useLogin
