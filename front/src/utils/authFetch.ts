import { useAuthStore } from "./store/useAuthStore";

export const authFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = useAuthStore.getState().token;
  const logout = useAuthStore.getState().logout;

  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    logout(); // 🔐 Déconnexion auto si le token est expiré ou invalide
  }

  return response;
};
