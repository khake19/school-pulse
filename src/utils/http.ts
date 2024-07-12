const http = async (endpoint: string, options: object = {}): Promise<Response> => {
  const response: Response = await fetch(endpoint, {
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

const post = async <T, P>(endpoint: string, params: P): Promise<T> => {
  const options = {
    method: 'post',
    body: params
  }

  const response = await http(endpoint, options)
  return response.json()
}

const put = async <T, P extends object>(endpoint: string, params: P): Promise<T> => {
  const options = {
    method: 'put',
    body: params
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
