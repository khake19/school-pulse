import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('token')

  if (request.nextUrl.pathname.startsWith('/api/login') && !hasToken) {
    return NextResponse.next()
  }

  if (!hasToken) {
    return new NextResponse(JSON.stringify({ success: false, message: 'authentication failed' }), {
      status: 401,
      headers: { 'content-type': 'application/json' }
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}
