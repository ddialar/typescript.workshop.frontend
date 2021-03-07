import { validateNewPostParams, GENERIC_FIELD_ERROR_MESSAGE } from '@validators'

const testingPostBody = 'This is a post body'

describe('[VALIDATORS] - validateNewPostParams', () => {
  it('validates the provided data successfully', () => {
    const postData = {
      postBody: testingPostBody
    }
    const expectedResult = {}

    const result = validateNewPostParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when post body is not provided', () => {
    const postData = {}
    const expectedResult = {
      thereAreErrors: true,
      postBody: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateNewPostParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when post body is empty', () => {
    const postData = {
      postBody: ''
    }
    const expectedResult = {
      thereAreErrors: true,
      postBody: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateNewPostParams(postData)

    expect(result).toStrictEqual(expectedResult)
  })
})
