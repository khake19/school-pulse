import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { HttpResponse } from '~/constant/http'

interface IPathProps {
  params: {
    path: string[]
  }
}

const jsonResponse = async (res: Response) => {
  const text = await res.text()
  const body = text ? JSON.parse(text) : null
  return { status: res.status, body }
}

async function proxyWithAutoRefresh(request: NextRequest, originalReq: Request): Promise<NextResponse> {
  // first attempt
  const first = await fetch(originalReq)
  const firstParsed = await jsonResponse(first)

  if (firstParsed.status !== HttpResponse.unauthorized) {
    return NextResponse.json(firstParsed.body, { status: firstParsed.status })
  }

  // Try to refresh via our own /api/refresh (reds refreshtoken cookie itself)
  const refreshRes = await fetch(`${request.nextUrl.origin}/api/refresh`, {
    method: 'POST',
    headers: {
      cookie: request.headers.get('cookie') ?? ''
    }
  })

  const refreshParsed = await jsonResponse(refreshRes)

  if ((await refreshParsed).status !== HttpResponse.ok) {
    const resp = NextResponse.json({ error: 'Unauthorized' }, { status: HttpResponse.unauthorized })
    resp.cookies.delete('accessToken')
    return resp
  }

  const newAccessToken: string | undefined = refreshParsed.body?.access_token
  if (!newAccessToken) {
    const resp = NextResponse.json({ error: 'Unauthorized' }, { status: HttpResponse.unauthorized })
    resp.cookies.delete('accessToken')
    return resp
  }

  // Retry original request with new token
  const retryHeaders = new Headers(originalReq.headers)
  retryHeaders.set('authorization', `Bearer ${newAccessToken}`)

  const retry = await fetch(new Request(originalReq, { headers: retryHeaders }))
  const retryParsed = await jsonResponse(retry)

  const resp = NextResponse.json(retryParsed.body, { status: retryParsed.status })

  resp.cookies.set({
    name: 'accessToken',
    value: newAccessToken,
    httpOnly: true
  })

  if (retryParsed.status === HttpResponse.unauthorized) {
    resp.cookies.delete('accessToken')
  }

  return resp
}

const handleResponse = async (data: Response) => {
  const response = NextResponse.json(await data.json(), { status: data.status })
  if (data.status === HttpResponse.unauthorized) {
    response.cookies.delete('accessToken')
  }
  return response
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('accessToken')?.value

  const searchParams = request.nextUrl.searchParams
  const queryParams = new URLSearchParams(searchParams)

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    authorization: 'Bearer ' + token
  }
  const url = process.env.SERVER_URL + '/api/' + params.path.join('/') + '?' + queryParams

  return proxyWithAutoRefresh(request, new Request(url, { method: 'GET', headers }))
}

export async function POST(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('accessToken')?.value
  const contentType = request.headers.get('Content-Type')

  const headers: HeadersInit = {
    authorization: `Bearer ${token}`
  }

  let body: BodyInit
  if (contentType?.includes('multipart/form-data')) {
    body = await request.formData()
  } else {
    body = JSON.stringify(await request.json())
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${process.env.SERVER_URL}/api/${params.path.join('/')}`, {
    method: 'post',
    body,
    headers
  })
  return handleResponse(response)
}

export async function PUT(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('accessToken')?.value
  const contentType = request.headers.get('Content-Type')

  const headers: HeadersInit = {
    authorization: `Bearer ${token}`
  }

  let body: BodyInit

  if (contentType?.includes('multipart/form-data')) {
    body = await request.formData()
  } else {
    body = JSON.stringify(await request.json())
    headers['Content-Type'] = 'application/json'
  }

  const data = await fetch(process.env.SERVER_URL + '/api/' + params.path.join('/'), {
    method: 'put',
    body,
    headers
  })
  return handleResponse(data)
}

export async function DELETE(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('accessToken')?.value

  const data = await fetch(process.env.SERVER_URL + '/api/' + params.path.join('/'), {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  })

  return new Response(null, {
    status: data.status
  })
}
