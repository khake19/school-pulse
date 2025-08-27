import { NextRequest, NextResponse } from 'next/server'
import { HttpResponse } from '~/constant/http'

const handleResponse = async (data: Response) => {
  const res = await data.json()
  const response = NextResponse.json(res, { status: data.status })

  if (data.status === HttpResponse.ok) {
    const { access_token } = res

    response.cookies.set({
      name: 'accessToken',
      value: access_token,
      httpOnly: true
    })
  }
  return response
}

export async function POST(request: NextRequest) {
  // Read refresh token from httpOnly cookies
  const refreshToken = request.cookies.get('refreshToken')?.value

  console.log('refresh token', refreshToken)

  if (!refreshToken) {
    return NextResponse.json(
      {
        error: 'Refresh token not found'
      },
      { status: 401 }
    )
  }

  const body = JSON.stringify({ refresh_token: refreshToken })

  const data = await fetch(process.env.SERVER_URL + '/api/auth/refresh_token', {
    method: 'post',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return handleResponse(data)
}
