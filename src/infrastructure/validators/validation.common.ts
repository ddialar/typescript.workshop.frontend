import { ValidationResult } from 'joi'
import { GENERIC_FIELD_ERROR_MESSAGE } from './validation.constants'

export type FormatedValidation<T> = T & { thereAreErrors?: boolean }

export const formatValidationResult = <T>(rawValidationResults: ValidationResult[]): FormatedValidation<T> =>
  rawValidationResults.reduce((result, validation) => {
    const [key] = Object.keys(validation.value)

    return validation.error
      ? { ...result, thereAreErrors: true, [key]: GENERIC_FIELD_ERROR_MESSAGE }
      : result
  }, {} as T)
