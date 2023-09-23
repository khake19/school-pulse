const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

const http = async <T>(endpoint: string, options: object): Promise<T> => {
  const response = await fetch(process.env.NEXT_PUBLIC_CLIENT_URL + '/api' + endpoint, options)
  if (!response.ok) throw new Error(response.statusText)
  return (await response.json()) as Promise<T>
}

const get = async <T>(endpoint: string, options: object = {}): Promise<T> => {
  const response = await http<T>(endpoint, { ...defaultOptions, ...options })
  return response
}

const post = (endpoint: string, data: object) => {
  const options = {
    ...defaultOptions,
    method: 'post',
    body: JSON.stringify(data)
  }

  return http(endpoint, options)
}

export { post, get }
