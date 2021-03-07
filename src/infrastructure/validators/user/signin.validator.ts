import { SigninFormData } from '@types'

import { passwordSchema, nameSchema, surnameSchema, emailSchema, avatarSchema, confirmPasswordSchema } from '../validation.schemas'
import { formatValidationResult, FormatedValidation } from '../validation.common'
import { PASSWORD_MISMATCH_ERROR_MESSAGE } from '../validation.constants'

export const validateSigninParams = ({ name, surname, avatar, email, password, confirmPassword }: Partial<SigninFormData>): FormatedValidation<Partial<SigninFormData>> => {
  const nameResult = nameSchema.validate({ name })
  const surnameResult = surnameSchema.validate({ surname })
  const avatarResult = avatarSchema.validate({ avatar })
  const emailResult = emailSchema.validate({ email })
  const passwordResult = passwordSchema.validate({ password })
  const confirmPasswordResult = confirmPasswordSchema.validate({ confirmPassword })

  const formattedResult = formatValidationResult<Partial<SigninFormData>>([nameResult, surnameResult, avatarResult, emailResult, passwordResult, confirmPasswordResult])

  return password !== confirmPassword && !passwordResult.error && !confirmPasswordResult.error
    ? { ...formattedResult, thereAreErrors: true, password: PASSWORD_MISMATCH_ERROR_MESSAGE, confirmPassword: PASSWORD_MISMATCH_ERROR_MESSAGE }
    : formattedResult
}
