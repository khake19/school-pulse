import { NextResponse } from 'next/server'
import { HttpResponse } from '~/constant/http'

const handleResponse = async (data: Response) => {
  const res = await data.json()
  const response = NextResponse.json(res, { status: data.status })

  if (data.status === HttpResponse.ok) {
    const { token } = res

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true
    })
  }
  return response
}

export async function POST(request: Request) {
  const body = JSON.stringify(await request.json())

  const data = await fetch(process.env.SERVER_URL + '/api/auth/sign_in', {
    method: 'post',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return handleResponse(data)
}
