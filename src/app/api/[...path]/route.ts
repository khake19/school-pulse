import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { HttpResponse } from '~/constant/http'

interface IPathProps {
  params: {
    path: string[]
  }
}

async function handleResponse(request: NextRequest, data: Response) {
  const response = NextResponse.json(await data.json(), { status: data.status })
  if (data.status === HttpResponse.unauthorized) {
    response.cookies.delete('token')
  }
  return response
}

async function performRequest(method: string, url: string, body?: any, headers?: Headers) {
  const token = headers?.get('authorization') || ''
  const data = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  })
  return data
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const url = process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/')
  const data = await performRequest('GET', url, undefined, request.headers)
  return handleResponse(request, data)
}

export async function POST(request: NextRequest, { params }: IPathProps) {
  const body = await request.json()
  const url = process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/')
  const data = await performRequest('POST', url, body, request.headers)
  return handleResponse(request, data)
}

export async function PUT(request: NextRequest, { params }: IPathProps) {
  const body = await request.json()
  const url = process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/')
  const data = await performRequest('PUT', url, body, request.headers)
  return handleResponse(request, data)
}

export async function DELETE(request: NextRequest, { params }: IPathProps) {
  const url = process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/')
  const data = await performRequest('DELETE', url, undefined, request.headers)
  return handleResponse(request, data)
}
