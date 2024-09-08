import { NextResponse } from 'next/server'

export async function POST(request: Request, { params }: any) {
  const body = await request.json()

  const data = await fetch(process.env.SERVER_URL + '/api/auth/sign_in', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { id, email, token } = await data.json()

  const response = NextResponse.json(
    {
      id,
      email
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
