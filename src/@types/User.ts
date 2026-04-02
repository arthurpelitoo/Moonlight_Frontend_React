
type UserType = "customer" | "admin";

export interface User {
    id: number;
    name: string;
    cpf: string;
    email: string;
    password: string;
    created_at: Date;
    type: UserType;
}

export type AuthUser = Omit<User, "password" | "created_at">;

export {}