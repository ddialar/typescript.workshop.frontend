import { ApiError } from '@types'

export const mapErrorFromApi = (data: any): ApiError => ({
  error: true,
  message: data?.message || 'There was an error with your request.'
})
