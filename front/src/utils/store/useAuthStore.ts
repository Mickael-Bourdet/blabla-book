import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUser {
  name: string,
}

interface AuthState {
  user: IUser | null
  token: string | null
  login: (name: string, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      // Fonction appelée quand on se connecte
      login: (name, token) => set(() => ({user : {name}, token})),

      // Fonction appelée quand on se déconnecte
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage", // clé utilisée dans localStorage
      partialize: (state) => ({ user: state.user, token: state.token }), // on stocke seulement ce qu'on veut (pas les fonctions)
    }
  )
);
