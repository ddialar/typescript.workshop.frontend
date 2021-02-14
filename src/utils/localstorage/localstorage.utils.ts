// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { AuthenticatedUser, DecodedJwt } from '@types'

import { TOKEN_KEY, USERNAME_KEY } from './localstorage.constants'

export const saveUserDataToLocalStorage = ({ username, token }: AuthenticatedUser) => {
  window.localStorage.setItem(TOKEN_KEY, token)
  window.localStorage.setItem(USERNAME_KEY, username)
}

export const removeUserDataFromLocalStorage = () => {
  window.localStorage.removeItem(TOKEN_KEY)
  window.localStorage.removeItem(USERNAME_KEY)
}

export const checkJwtTokenInLocalStorage = (): AuthenticatedUser | null => {
  const storedToken = window.localStorage.getItem(TOKEN_KEY)

  if (storedToken) {
    const decodedToken = jwt_decode<DecodedJwt>(storedToken)

    if (decodedToken?.exp * 1000 < Date.now()) {
      removeUserDataFromLocalStorage()
    } else {
      return { token: storedToken, username: decodedToken.sub }
    }
  }

  return null
}
