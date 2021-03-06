import { LoginParams } from '@types'

import { usernameSchema, passwordSchema } from '../validation.schemas'
import { formatValidationResult } from '../validation.common'

interface LoginValidationResult {
  username?: string
  password?: string
}

export const validateLoginParams = ({ username, password }: Partial<LoginParams>): LoginValidationResult => {
  const usernameResult = usernameSchema.validate({ username })
  const passwordResult = passwordSchema.validate({ password })

  return formatValidationResult<LoginValidationResult>([usernameResult, passwordResult])
}
