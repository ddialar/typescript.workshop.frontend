export interface UserDomainModel {
  id: string
  username: string
  password: string
  email: string
  name: string
  surname: string
  avatar: string
  token: string
  enabled: boolean
  deleted: boolean
  lastLoginAt: string
  createdAt: string
  updatedAt: string
}
export interface NewUserRegistryData {
  name: string
  surname: string
  avatar: string
  email: string
  password: string
}

export interface RegisteredUser {
  username: string
  fullName: string
  avatar: string
}
