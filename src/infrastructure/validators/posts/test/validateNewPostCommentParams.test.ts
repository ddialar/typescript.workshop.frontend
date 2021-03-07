import { validateNewPostCommentParams, GENERIC_FIELD_ERROR_MESSAGE } from '@validators'

const testingPostBody = 'This is a post body'

describe('[VALIDATORS] - validateNewPostCommentParams', () => {
  it('validates the provided data successfully', () => {
    const postData = {
      commentBody: testingPostBody
    }
    const expectedResult = {
      thereAreErrors: false
    }

    const result = validateNewPostCommentParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when comment body is not provided', () => {
    const postData = {}
    const expectedResult = {
      thereAreErrors: true,
      commentBody: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateNewPostCommentParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when comment body is empty', () => {
    const postData = {
      commentBody: ''
    }
    const expectedResult = {
      thereAreErrors: true,
      commentBody: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateNewPostCommentParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })
})
