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
  setUser: (userData: IUserAuthStore) => void; // permet de mettre a jour le user et de le rendre dispo a tout les composants
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      // Fonction appelée quand on se connecte
      login: (name, id, token) => set(() => ({user : {name, id}, token})),

      // Fonction appelée quand on se déconnecte
      logout: () => set({ user: null, token: null }),

      setUser: (userData) => set({ user: userData }),
    }),
    {
      name: "auth-storage", // clé utilisée dans localStorage
      partialize: (state) => ({ user: state.user, token: state.token }), // on stocke seulement ce qu'on veut (pas les fonctions)

      
    }
  )
);
