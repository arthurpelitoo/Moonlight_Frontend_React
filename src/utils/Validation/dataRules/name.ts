import type { ValidationRule } from "./ValidationRule";


export const nameRules: ValidationRule[] = [
    { label: "Mínimo 1 caracteres", test: (name) => name.length >= 1 },
    { label: "Máximo de 16 caracteres", test: (name) => name.length <= 16}
];
 
export function getNameVerifiedLevel(name: string): number {
    return nameRules.filter((rule) => rule.test(name)).length; // nivel devolve do 0 até 2.
}