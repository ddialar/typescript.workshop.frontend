import { newPostSchema } from '../validation.schemas'
import { formatValidationResult } from '../validation.common'

interface ValidatorParams {
  postBody?: string
}

export const validateNewPostParams = ({ postBody }: ValidatorParams): ValidatorParams => {
  const newPostResult = newPostSchema.validate({ postBody })

  return formatValidationResult<ValidatorParams>([newPostResult])
}
