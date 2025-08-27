'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import loginService from '~/app/login/services/login.service'

export const logout = async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const refreshToken = cookieStore.get('refreshToken')?.value
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + accessToken
    }
  }
  const result = await loginService.logout(headers)

  if (result) {
    cookieStore.delete('accessToken')
    cookieStore.delete('refreshToken')
    redirect(process.env.CLIENT_URL || '')
  }
}
