import { runRequest, RequestArgs } from './api'
import { LOGIN_PATH, LOGOUT_PATH } from '@common'

import { LoginParams } from '@types'

export const loginApi = async ({ username, password }: LoginParams) => {
  const requestParams: RequestArgs = {
    method: 'post',
    url: LOGIN_PATH,
    body: { username, password }
  }

  return await runRequest(requestParams)
}

export const logoutApi = async (token: string) => {
  const requestParams: RequestArgs = {
    method: 'post',
    url: LOGOUT_PATH,
    token
  }

  return await runRequest(requestParams)
}
