'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import loginService from '~/app/login/services/login.service'

export const logout = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  }
  const result = await loginService.logout(headers)

  if (result) {
    cookieStore.delete('token')
    redirect(process.env.CLIENT_URL || '')
  }
}
