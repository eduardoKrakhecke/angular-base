export interface User {
  name: string
  email: string
  isAdmin: boolean
  created_at: Date
}

export interface UserSignIn {
  email: string
  password: string
}
