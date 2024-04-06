import { HttpResponse, HttpStatus } from '~/constant/http'

const defaultOptions = {
  headers: { 'Content-Type': 'application/json' }
}

const http = async <T>(endpoint: string, options: object = {}): Promise<T | null> => {
  const response: Response = await fetch(endpoint, { ...defaultOptions, ...options })
  if (!response.ok) {
    throw new Error(JSON.stringify(await response.json()))
  }

  if (response.status === HttpResponse.noContent) return null
  return await response.json()
}

const get = async <T>(endpoint: string, options: object = {}): Promise<T | null> => {
  const response = await http<T>(endpoint, options)
  return response
}

const post = async <T, P extends object>(endpoint: string, params: P): Promise<T | null> => {
  const options = {
    method: 'post',
    body: JSON.stringify(params)
  }

  return await http(endpoint, options)
}

const put = async <T, P extends object>(endpoint: string, params: P): Promise<T | null> => {
  const options = {
    method: 'put',
    body: JSON.stringify(params)
  }

  return await http(endpoint, options)
}

const remove = async <T>(endpoint: string): Promise<T | null> => {
  const options = {
    method: 'delete'
  }

  return await http(endpoint, options)
}

export { post, get, put, remove }
