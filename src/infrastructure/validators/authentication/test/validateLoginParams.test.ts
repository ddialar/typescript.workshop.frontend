import { testingUsers, testingValidPlainPassword } from '@testingFixtures'

import { validateLoginParams, GENERIC_FIELD_ERROR_MESSAGE } from '@validators'

const [{ username }] = testingUsers

describe('[VALIDATORS] validateLoginParams', () => {
  it('validates the provided data successfully', () => {
    const loginData = {
      username,
      password: testingValidPlainPassword
    }
    const expectedResult = {}

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when username is not provided', () => {
    const loginData = {
      password: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      username: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when the provided username has not a valid structure', () => {
    const loginData = {
      username: '@wrong.mail.com',
      password: testingValidPlainPassword
    }

    const expectedResult = {
      thereAreErrors: true,
      username: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when password is not provided', () => {
    const loginData = {
      username
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when the provided password has not a valid structure', () => {
    const loginData = {
      username,
      password: '123' // Password too short.
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('returns an error when the provided password contains not valid elements', () => {
    const loginData = {
      username,
      password: '123$#%'
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateLoginParams(loginData)

    expect(result).toStrictEqual(expectedResult)
  })
})
