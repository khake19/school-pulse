const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

const http = async (endpoint: string, options: object = {}): Promise<Response> => {
  const response: Response = await fetch(process.env.NEXT_PUBLIC_CLIENT_URL + endpoint, {
    ...defaultOptions,
    ...options
  })
  if (!response.ok) {
    throw new Error(JSON.stringify(await response.json()))
  }

  return response
}

const get = async <T>(endpoint: string, options: object = {}): Promise<T> => {
  const response = await http(endpoint, options)
  return response.json()
}

const post = async <T, P extends object>(endpoint: string, params: P): Promise<T> => {
  const options = {
    method: 'post',
    body: JSON.stringify(params)
  }

  const response = await http(endpoint, options)
  return response.json()
}

const put = async <T, P extends object>(endpoint: string, params: P): Promise<T> => {
  const options = {
    method: 'put',
    body: JSON.stringify(params)
  }

  const response = await http(endpoint, options)
  return response.json()
}

const remove = async <T>(endpoint: string) => {
  const options = {
    method: 'delete'
  }

  await http(endpoint, options)
  return null
}

export { post, get, put, remove }
