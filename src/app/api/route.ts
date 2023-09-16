import { NextResponse } from 'next/server'
export async function GET() {
  const response = NextResponse.json(
    {
      token: 'this is a parent route'
    },
    { status: 200 }
  )
  return response
}
