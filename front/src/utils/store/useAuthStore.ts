import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUserAuthStore {
  name: string,
  id: number,
}

interface AuthState {
  user: IUserAuthStore | null
  token: string | null
  login: (name: string, id: number, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (name, id, token) => set(() => ({user : {name, id}, token})),

      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);
