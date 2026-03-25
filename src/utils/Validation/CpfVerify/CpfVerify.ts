interface EmailVerify {
    label: string;
    test: (email: string) => boolean; //recebe email de string na função e devolve um booleano
}

export const emailRule: EmailVerify = 
    { 
        label: "Coloque um email válido",
        test: (email) => /^(?:[a-zA-Z0-9_'^&+/=?`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email)
    }
 
export function getEmailVerified(email: string): boolean {
    return emailRule.test(email); 
}
 
export function getStrengthLabelText(inserted: boolean): { labelText: string; color: string } {
    if (inserted) return { labelText: "", color: "" };
    return { labelText: "Insira um email válido", color: "#1D9E75" };
}