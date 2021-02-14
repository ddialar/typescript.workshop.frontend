import { AuthenticatedUser } from '@types'

export const mapLoginFromApi = (data: any): AuthenticatedUser => ({
  token: data?.token || '',
  username: data?.username || ''
})
