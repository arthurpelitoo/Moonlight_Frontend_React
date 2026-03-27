import type { ValidationRule } from "./ValidationRule";

export const usernameRules: ValidationRule[] = [
    { label: "Mínimo 1 caracteres", test: (username) => username.length >= 1 },
    { label: "Máximo de 16 caracteres", test: (username) => username.length <= 16}
];
 
export function getUsernameVerifiedLevel(username: string): number {
    return usernameRules.filter((rule) => rule.test(username)).length; // nivel devolve do 0 até 2.
}