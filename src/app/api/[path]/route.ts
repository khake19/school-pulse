import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { get } from '~/utils/http'

interface IPathProps {
  params: {
    path: string
  }
}

export async function GET(request: NextRequest, { params }: IPathProps) {
  const token = request.cookies.get('token')?.value

  const data = await get(process.env.NEXT_PUBLIC_SERVER_URL + '/' + params.path, {
    headers: {
      authorization: 'Bearer ' + token
    }
  })

  const response = NextResponse.json(data, { status: 200 })
  return response
}
