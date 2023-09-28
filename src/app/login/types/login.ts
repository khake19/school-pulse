export interface ILoginResponse {
  id: string
  email: string
  token: string
}

export interface ILoginParams {
  email: string
  password: string
}
