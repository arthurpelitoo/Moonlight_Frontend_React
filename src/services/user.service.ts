import { apiFetch } from "./api";

export async function getProfile() {
  return apiFetch("/me");
}