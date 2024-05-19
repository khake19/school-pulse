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

  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/') + '?' + queryParams, {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  })

  return handleResponse(data)
}

export async function POST(request: NextRequest, { params }: IPathProps) {
  const body = await request.json()
  const token = request.cookies.get('token')?.value

  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/'), {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token
    }
  })
  return handleResponse(data)
}

export async function PUT(request: NextRequest, { params }: IPathProps) {
  const formData = await request.formData()
  // const body = await request.json()
  const token = request.cookies.get('token')?.value

  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/'), {
    method: 'put',
    body: formData,
    headers: {
      authorization: 'Bearer ' + token
    }
  })
  return handleResponse(data)
}

export async function DELETE(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value
  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/'), {
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
