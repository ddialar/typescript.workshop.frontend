import Joi from 'joi'

import { username, password, confirmPassword, email, name, surname, avatar } from './validation.rules'

export const nameSchema = Joi.object({ name })
export const surnameSchema = Joi.object({ surname })
export const emailSchema = Joi.object({ email })
export const avatarSchema = Joi.object({ avatar })
export const usernameSchema = Joi.object({ username })
export const passwordSchema = Joi.object({ password })
export const confirmPasswordSchema = Joi.object({ confirmPassword })
