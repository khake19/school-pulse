const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

const http = async <T>(endpoint: string, options: object = {}): Promise<T> => {
  const response: Response = await fetch(endpoint, options)
  if (!response.ok) throw new Error(response.statusText)
  return (await response.json()) as Promise<T>
}

const get = async <T>(endpoint: string, options: object = {}): Promise<T> => {
  const response = await http<T>(endpoint, { ...defaultOptions, ...options })
  return response
}

const post = async <T, P extends object>(endpoint: string, params: P): Promise<T> => {
  const options = {
    ...defaultOptions,
    method: 'post',
    body: JSON.stringify(params)
  }

  return await http(endpoint, options)
}

export { post, get }
