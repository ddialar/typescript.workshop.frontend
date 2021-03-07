import Joi from 'joi'

export const body = Joi.string()
export const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).required()
export const url = Joi.string().uri({
  scheme: ['http', 'https'],
  domain: {
    minDomainSegments: 2,
    tlds: { allow: true }
  }
})

export const name = Joi.string().min(2).required()
export const surname = Joi.string().min(2).required()
export const avatar = url.required()
export const username = email
export const password = Joi.string().pattern(/^[a-zA-Z0-9]{4,}$/).required()
export const confirmPassword = password
export const optionalAvatar = url

export const postBody = body.required()
export const commentBody = body.required()
