import { ValidationResult } from 'joi'
import { GENERIC_FIELD_ERROR_MESSAGE } from './validation.constants'

export const formatValidationResult = <T>(rawValidationResults: ValidationResult[]): T =>
  rawValidationResults.reduce((result, validation) => {
    const [key] = Object.keys(validation.value)

    return validation.error
      ? { ...result, [key]: GENERIC_FIELD_ERROR_MESSAGE }
      : result
  }, {} as T)
