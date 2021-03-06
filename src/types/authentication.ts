export interface DecodedJwt {
  sub: string
  iat: number
  exp: number
}

export interface LoginParams {
  username: string
  password: string
}

export interface AuthenticatedUser {
  token: string
  username: string
}
