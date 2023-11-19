import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('token')

  if (hasToken && request.nextUrl.pathname === '/login') {
    const dashboardUrl = new URL(process.env.NEXT_PUBLIC_CLIENT_URL + '/', request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  if (!hasToken && request.nextUrl.pathname !== '/login') {
    const loginUrl = new URL(process.env.NEXT_PUBLIC_CLIENT_URL + '/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)

    return NextResponse.redirect(loginUrl)
  }
  return NextResponse.next()
}

//test here
export const config = {
  matcher: ['/((?!_next/static|favicon.ico|api).*)']
}
