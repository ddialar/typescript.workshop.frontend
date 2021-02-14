import { loginApi, logoutApi } from '@api'
import { LoginParams } from '@types'
import { mapLoginFromApi, mapErrorFromApi } from '@mappers'

export const login = async ({ username, password }: LoginParams) => {
  const result = await loginApi({ username, password })
  return result.error ? mapErrorFromApi(result) : mapLoginFromApi(result)
}

export const logout = async (token: string) => logoutApi(token)
