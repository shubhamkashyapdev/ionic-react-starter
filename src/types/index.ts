export type User = {
  id: string
  email: string
  role: string
}

export type AuthStoreType = {
  user: User
  loading: boolean
  setLoading: (loading: boolean) => void
  setUser: (user: User) => void
}
