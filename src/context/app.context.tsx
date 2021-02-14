import React, { FC, createContext, useState, useEffect } from 'react'

import { AuthenticatedUser } from '@types'
import { saveUserDataToLocalStorage, removeUserDataFromLocalStorage, checkJwtTokenInLocalStorage } from '@utils'

interface AppContextData {
    user: AuthenticatedUser | null
    setUserData: (userData: AuthenticatedUser) => void
    removeUserData: () => void
}

export const AppContext = createContext({} as AppContextData)

export const AppContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthenticatedUser | null>(null)

  useEffect(() => {
    setUser(checkJwtTokenInLocalStorage)
  }, [])

  const setUserData = (userData: AuthenticatedUser) => {
    saveUserDataToLocalStorage(userData)
    setUser(userData)
  }

  const removeUserData = () => {
    removeUserDataFromLocalStorage()
    setUser(null)
  }

  const value: AppContextData = {
    user,
    setUserData,
    removeUserData
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
