import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

interface IPathProps {
  params: {
    path: string
  }
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value

  const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path, {
    headers: {
      authorization: 'Bearer ' + token
    }
  })

  const response = NextResponse.json(data.json(), { status: data.status })
  return response
}
