import { newPostSCommentchema } from '../validation.schemas'
import { formatValidationResult } from '../validation.common'

interface ValidatorParams {
  commentBody?: string
}

export const validateNewPostCommentParams = ({ commentBody }: ValidatorParams): ValidatorParams => {
  const newPostCommentResult = newPostSCommentchema.validate({ commentBody })

  return formatValidationResult<ValidatorParams>([newPostCommentResult])
}
