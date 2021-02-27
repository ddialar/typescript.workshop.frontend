import { ApiError, NewUserRegistryData, RegisteredUser } from '@types'
import { registryNewUserApi } from '@api'
import { mapErrorFromApi, mapRegisteredUserFromApiToRegistered } from '@mappers'

export const registryNewUser = async (userData: NewUserRegistryData): Promise<RegisteredUser | ApiError> => {
  const result = await registryNewUserApi(userData)
  return ('error' in result) ? mapErrorFromApi(result) : mapRegisteredUserFromApiToRegistered(result)
}
