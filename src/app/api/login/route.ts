import { NextResponse } from 'next/server'
export async function GET() {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzY2hvb2xfcHVsc2VfYXBpIiwiZXhwIjoxNjk3ODUyMDA4LCJpYXQiOjE2OTU0MzI4MDgsImlzcyI6InNjaG9vbF9wdWxzZV9hcGkiLCJqdGkiOiI3ZTVjM2VjMS03YTIxLTRhYmEtOTZlMS02NDcxYmU5NmRiYmUiLCJuYmYiOjE2OTU0MzI4MDcsInN1YiI6ImYxMDVhMTAxLTU1NjctNGE4Mi05ZTEyLWExMGNmNTg2OTYxZCIsInR5cCI6ImFjY2VzcyJ9.gh9nwJ_KXzuNLVRfpUFsspLSLQSir7iriT1iTPPU_mqsuUYl4n5dvyCM9yuB-BviSJ_kZEdQ7FAtXnKG05D9-g'
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
