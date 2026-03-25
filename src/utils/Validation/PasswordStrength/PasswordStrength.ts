interface PasswordRule {
    label: string;
    test: (password: string) => boolean; //recebe pasw de string na função e devolve um booleano
}

export const passwordRules: PasswordRule[] = [
    { label: "Mínimo 8 caracteres", test: (password) => password.length >= 8 },
    { label: "Máximo de 16 caracteres", test: (password) => password.length <= 16},
    { label: "Letra maiúscula", test: (password) => /[A-Z]/.test(password) },
    { label: "Letra minúscula", test: (password) => /[a-z]/.test(password) },
    { label: "Número", test: (password) => /\d/.test(password) }
];
 
export function getStrengthLevel(password: string): number {
    return passwordRules.filter((rule) => rule.test(password)).length; // nivel devolve do 0 até 5.
}
 
export function getStrengthLabelText(level: number): { labelText: string; color: string } {
    if (level === 0) return { labelText: "", color: "" };
    if (level <= 2) return { labelText: "Fraca", color: "#E24B4A" };
    if (level === 3) return { labelText: "Razoável", color: "#EF9F27" };
    if (level === 4) return { labelText: "Boa", color: "#639922" };
    return { labelText: "Forte", color: "#1D9E75" };
}