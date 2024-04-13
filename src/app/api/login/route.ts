import { NextResponse } from 'next/server'
import { z } from 'zod'
import { ILoginParams, ILoginResponse } from '~/app/login/types/login'
import { HttpResponse, HttpStatus } from '~/constant/http'
import { post } from '~/utils/http'

export async function POST(request: Request) {
  const data = await request.json()

  const { id, email, token } = await post<ILoginResponse, ILoginParams>(
    process.env.NEXT_PUBLIC_SERVER_URL + '/auth/sign_in',
    data
  )

  const response = NextResponse.json(
    {
      id,
      email
    },
    { status: HttpResponse.ok }
  )

  // Then set a cookie
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true
  })
  return response
}
