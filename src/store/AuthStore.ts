import create from 'zustand'

import type { User } from '../types'

type AuthStoreType = {
  user: User
  loading: boolean
  setLoading: (loading: boolean) => void
  setUser: (user: User) => void
}

const useAuthStore = create(
  (set): AuthStoreType => ({
    loading: false,
    user: {
      id: '',
      email: '',
      role: ''
    },
    setLoading: (loading: boolean) => set((state: AuthStoreType) => ({ ...state, loading })),
    setUser: (user: User) => set((state: AuthStoreType) => ({ ...state, user }))
  })
)

export default useAuthStore
