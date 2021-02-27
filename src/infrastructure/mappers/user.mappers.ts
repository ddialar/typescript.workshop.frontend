import { RegisteredUser } from '@types'

// REFACTOR Define these fixed values in constant or environment files
export const mapRegisteredUserFromApiToRegistered = (userData: RegisteredUser): RegisteredUser => ({
  username: userData.username || 'Username not defined',
  fullName: userData.fullName || 'User full name not defined',
  avatar: userData.avatar || 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043244-avatar-cloud-crying-rain_113246.png'
})
