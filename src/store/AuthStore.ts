import create from 'zustand'

import type { AuthStoreType, User } from '@/types'

const useAuthStore = create((set) => ({
  loading: false,
  user: {
    id: '',
    email: '',
    role: ''
  },
  setLoading: (loading: boolean) => set((state: AuthStoreType) => ({ ...state, loading })),
  setUser: (user: User) => set((state: AuthStoreType) => ({ ...state, user }))
}))

export default useAuthStore
