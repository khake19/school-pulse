import { NextResponse } from 'next/server'
export async function GET() {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzY2hvb2xfcHVsc2VfYXBpIiwiZXhwIjoxNjk3MjY3Mzg2LCJpYXQiOjE2OTQ4NDgxODYsImlzcyI6InNjaG9vbF9wdWxzZV9hcGkiLCJqdGkiOiJmYmJiMTQ0Yi1jNTk1LTRkN2ItOWRjMC0zMWM0MmNhZTAyNmYiLCJuYmYiOjE2OTQ4NDgxODUsInN1YiI6ImYxMDVhMTAxLTU1NjctNGE4Mi05ZTEyLWExMGNmNTg2OTYxZCIsInR5cCI6ImFjY2VzcyJ9.lk1SGa7c9EF1Ocy_1PIBnhLmDdi3nSGPBuPv5B__wFzLB10ROuobOMev-b4Rw6__eP4deBNzWy6O97tVvTYkXg'
  const response = NextResponse.json(
    {
      token: 'i am login'
    },
    { status: 200 }
  )

  // Then set a cookie
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true
  })

  return response
}
