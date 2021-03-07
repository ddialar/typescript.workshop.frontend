import { newPostSCommentchema } from '../validation.schemas'
import { formatValidationResult, FormatedValidation } from '../validation.common'

interface ValidatorParams {
  commentBody?: string
}

export const validateNewPostCommentParams = ({ commentBody }: ValidatorParams): FormatedValidation<ValidatorParams> => {
  const newPostCommentResult = newPostSCommentchema.validate({ commentBody })

  return formatValidationResult<ValidatorParams>([newPostCommentResult])
}
