const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options?.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro na requisição");
  }

  return data;
}