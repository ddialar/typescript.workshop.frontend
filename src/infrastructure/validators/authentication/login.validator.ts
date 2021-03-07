import { LoginParams } from '@types'

import { usernameSchema, passwordSchema } from '../validation.schemas'
import { formatValidationResult, FormatedValidation } from '../validation.common'

export const validateLoginParams = ({ username, password }: Partial<LoginParams>): FormatedValidation<Partial<LoginParams>> => {
  const usernameResult = usernameSchema.validate({ username })
  const passwordResult = passwordSchema.validate({ password })

  return formatValidationResult<Partial<LoginParams>>([usernameResult, passwordResult])
}
