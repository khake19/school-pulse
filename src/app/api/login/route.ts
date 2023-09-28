import { NextResponse } from 'next/server'
import { ILoginParams, ILoginResponse } from '~/app/login/types/login'
import { post } from '~/utils/http'

export async function POST(request: Request) {
  const data = await request.json()

  const result = await post<ILoginResponse, ILoginParams>(process.env.NEXT_PUBLIC_SERVER_URL + '/auth/sign_in', data)
  const token = result.token

  const response = NextResponse.json(
    {
      token: 'i am login'
    },
    { status: 200 }
  )

  // Then set a cookie
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true
  })
  return response
}
