const SERVER_URL = 'http://127.0.0.1:4001/api'

const defaultOptions = {
  headers: { 'Content-Type': 'application/json', method: 'get' }
}

const http = async <T>(endpoint: string, options: object): Promise<T> => {
  const response = await fetch(SERVER_URL + endpoint, options)
  if(!response.ok) throw new Error(response.statusText)
  return await response.json() as Promise<T>
}

const get = async <T>(endpoint: string): Promise<T> => {
  const response = await http<T>(endpoint, defaultOptions)
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
