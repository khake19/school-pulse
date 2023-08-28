const SERVER_URL = 'http://127.0.0.1:4001/api'
// const SERVER_URL = 'https://jsonplaceholder.typicode.com'

const defaultOptions = {
  headers: { 'Content-Type': 'application/json', method: 'get' }
}

const http = async (endpoint: string, options: object) => await fetch(SERVER_URL + endpoint, options)

const get = async <T>(endpoint: string): Promise<T> => {
  const response = await http(endpoint, defaultOptions)

  return response.json()
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
