import { createContext, useContext } from "react";
import type { AuthContextType } from "../../contexts/AuthContext";

export const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
    return useContext(AuthContext);
}