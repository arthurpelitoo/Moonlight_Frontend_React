import { useEffect, useState } from "react";
import { AuthContext } from "../hooks/auth/useAuth";

type User = {
    id: number,
    username: string,
    email: string,
    cpf: string
}

export type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export function AuthProvider({children}: { children: React.ReactNode }){
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        
        if(savedToken && savedUser){
             // eslint-disable-next-line react-hooks/exhaustive-deps
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (token: string, user: User) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
}