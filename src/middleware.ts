import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('token')

  if (hasToken) {
    return NextResponse.next()
  }
  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)
 
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico|login).*)']
}
