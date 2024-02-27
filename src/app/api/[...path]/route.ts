import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { HttpResponse } from '~/constant/http'

interface IPathProps {
  params: {
    path: string[]
  }
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value
  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/'), {
    headers: {
      authorization: 'Bearer ' + token
    }
  })

  const response = NextResponse.json(await data.json(), { status: data.status })
  if (data.status === HttpResponse.unauthorized) {
    response.cookies.delete('token')
  }
  return response
}

export async function POST(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value
  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path.join('/'), {
    headers: {
      authorization: 'Bearer ' + token
    }
  })

  const response = NextResponse.json(await data.json(), { status: data.status })
  if (data.status === HttpResponse.unauthorized) {
    response.cookies.delete('token')
  }
  return response
}
