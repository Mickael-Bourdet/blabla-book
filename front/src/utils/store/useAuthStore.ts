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
  logout: () => void,
  setUser: (userData: IUserAuthStore) => void; // Allows you to update the user and make it available to all components
}

/**
 * Custom hook for managing authentication state with persistence.
 * Uses Zustand for state management and persist middleware for local storage.
 *
 * @returns {AuthState} - The authentication state and methods.
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,  // Initialize user as null (not authenticated)
      token: null, // Initialize token as null (not authenticated)

      // Login function to set user data and token
      login: (name, id, token) => set(() => ({user: {name, id}, token})),

      // Logout function to clear user data and token
      logout: () => set({ user: null, token: null }),

      setUser: (userData) => set({ user: userData }),
    }),
    {
      name: "auth-storage",  // Key for local storage
      partialize: (state) => ({ user: state.user, token: state.token }),  // Specify which parts of state to persist
    }
  )
);
