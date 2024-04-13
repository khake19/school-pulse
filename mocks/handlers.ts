import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('*', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick'
    })
  })
]
