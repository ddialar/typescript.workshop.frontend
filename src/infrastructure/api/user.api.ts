import { runRequest, RequestArgs } from './api'
import { SIGNIN_PATH } from '@common'
import { NewUserRegistryData, RegisteredUser, ApiError } from '@types'

export const registryNewUserApi = async (userData: NewUserRegistryData): Promise<RegisteredUser | ApiError> => {
  const requestParams: RequestArgs = {
    method: 'post',
    url: `${SIGNIN_PATH}`,
    body: { ...userData }
  }

  return await runRequest(requestParams)
}
