interface EmailVerify {
    label: string;
    test: (email: string) => boolean; //recebe email de string na função e devolve um booleano
}

export const emailRules: EmailVerify = 
    { 
        label: "Email válido",
        test: (email: string) => /^(?:[a-zA-Z0-9_'^&+/=?`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email),
    }
 
export function getEmailVerified(email: string): boolean {
    return emailRules.test(email); 
}
 
export function getVerifiedLabelText(inserted: boolean): { labelText: string; color: string } {
    if (inserted) return { labelText: "O Email é válido", color: "#1D9E75" };
    return { labelText: "Insira um email válido", color: "#E24B4A" };
}