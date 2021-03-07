import { newPostSchema } from '../validation.schemas'
import { formatValidationResult, FormatedValidation } from '../validation.common'

interface ValidatorParams {
  postBody?: string
}

export const validateNewPostParams = ({ postBody }: ValidatorParams): FormatedValidation<ValidatorParams> => {
  const newPostResult = newPostSchema.validate({ postBody })

  return formatValidationResult<ValidatorParams>([newPostResult])
}
