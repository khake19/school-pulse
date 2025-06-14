import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { HttpResponse } from '~/constant/http'

interface IPathProps {
  params: {
    path: string[]
  }
}

const handleResponse = async (data: Response) => {
  const response = NextResponse.json(await data.json(), { status: data.status })
  if (data.status === HttpResponse.unauthorized) {
    response.cookies.delete('token')
  }
  return response
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value

  const searchParams = request.nextUrl.searchParams
  const queryParams = new URLSearchParams(searchParams)

  const data = await fetch(process.env.SERVER_URL + '/api/' + params.path.join('/') + '?' + queryParams, {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  })

  return handleResponse(data)
}

export async function POST(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value
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
  const token = request.cookies.get('token')?.value
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
  const token = request.cookies.get('token')?.value

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
