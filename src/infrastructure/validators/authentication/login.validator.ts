import { LoginParams } from '@types'

import { usernameSchema, passwordSchema } from '../validation.schemas'
import { formatValidationResult } from '../validation.common'

export const validateLoginParams = ({ username, password }: Partial<LoginParams>): Partial<LoginParams> => {
  const usernameResult = usernameSchema.validate({ username })
  const passwordResult = passwordSchema.validate({ password })

  return formatValidationResult<Partial<LoginParams>>([usernameResult, passwordResult])
}
