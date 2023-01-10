import type { AuthStoreType, User } from 'src/types'
import create from 'zustand'

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
