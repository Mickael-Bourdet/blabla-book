// src/stores/useAuthStore.ts
import { create } from 'zustand'
import { IUser } from '../../@types'

interface AuthState {
  user: IUser | null
  token: string | null
  isAuthenticated: boolean
  login: (token: string, user: IUser) => void
  logout: () => void
  loadUserFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  // Called when the user logs in successfully
  login: (token, user) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    set({ token, user, isAuthenticated: true })
  },

  // Called to logout
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ token: null, user: null, isAuthenticated: false })
  },

  // Called on app load to initialize state
  loadUserFromStorage: () => {
    const token = localStorage.getItem('token')
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : null

    if (token && user) {
      set({ token, user, isAuthenticated: true })
    }
  },
}))
