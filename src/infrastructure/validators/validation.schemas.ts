import Joi from 'joi'

import { username, password } from './validation.rules'

export const usernameSchema = Joi.object({ username })
export const passwordSchema = Joi.object({ password })
