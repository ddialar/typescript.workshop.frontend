import { testingUsers, testingValidPlainPassword } from '@testingFixtures'

import { validateSigninParams, GENERIC_FIELD_ERROR_MESSAGE, PASSWORD_MISMATCH_ERROR_MESSAGE } from '@validators'

const [{ email, name, surname, avatar }] = testingUsers

describe('[VALIDATORS] - validateSigninParams', () => {
  it('must validate the provided data successfully', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {}

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when email is not provided', () => {
    const signinData = {
      name,
      surname,
      avatar,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      email: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided email has not a valid structure', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email: '@wrong.mail.com',
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      email: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when password is not provided', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided password has not a valid structure', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: '123', // Password too short.
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided password contains not valid elements', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: '123$#%',
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      password: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the confirmed password is not provided', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      confirmPassword: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the confirmed password has not a valid structure', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: '123' // Password too short.
    }
    const expectedResult = {
      thereAreErrors: true,
      confirmPassword: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the confirmed password contains not valid elements', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: '123$#%'
    }
    const expectedResult = {
      thereAreErrors: true,
      confirmPassword: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when passwords mismatch', () => {
    const signinData = {
      name,
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword.concat('123')
    }
    const expectedResult = {
      thereAreErrors: true,
      password: PASSWORD_MISMATCH_ERROR_MESSAGE,
      confirmPassword: PASSWORD_MISMATCH_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when name is not provided', () => {
    const signinData = {
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      name: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided name has not the minimum amount of characters', () => {
    const signinData = {
      name: 'J',
      surname,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      name: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when surname is not provided', () => {
    const signinData = {
      name,
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      surname: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided surname has not the minimum amount of characters', () => {
    const signinData = {
      name,
      surname: 'J',
      avatar,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      surname: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when avatar is not provided', () => {
    const signinData = {
      name,
      surname,
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      avatar: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided avatar is an empty string', () => {
    const signinData = {
      name,
      surname,
      avatar: '',
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      avatar: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided avatar has a schema different to http or https', () => {
    const signinData = {
      name,
      surname,
      avatar: avatar.replace('https', 'git'),
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      avatar: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })

  it('must return an error when the provided avatar has less than two domains', () => {
    const signinData = {
      name,
      surname,
      avatar: avatar.replace('cdn.icon-icons.', ''),
      email,
      password: testingValidPlainPassword,
      confirmPassword: testingValidPlainPassword
    }
    const expectedResult = {
      thereAreErrors: true,
      avatar: GENERIC_FIELD_ERROR_MESSAGE
    }

    const result = validateSigninParams(signinData)

    expect(result).toStrictEqual(expectedResult)
  })
})
