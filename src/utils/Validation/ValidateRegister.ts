import { isPasswordConfirmed } from "./dataRules/confirmPass";
import { isValidCPF } from "./dataRules/cpf";
import { isValidEmail } from "./dataRules/email";
import { getPasswordVerifiedLevel } from "./dataRules/password";
import { getNameVerifiedLevel } from "./dataRules/name";

export function validateRegister(data: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    cpf: string
}) {

    const { name, email, password, confirmPassword, cpf } = data;

    const nameLevel = getNameVerifiedLevel(name);
    const emailValid = isValidEmail(email);
    const strengthLevel = getPasswordVerifiedLevel(password);
    const passwordMatch = isPasswordConfirmed(password, confirmPassword);
    const cpfValid = isValidCPF(cpf);

    const isFormFilled = !!(name && email && password && confirmPassword && cpf);
    const isPasswordValid = passwordMatch && strengthLevel > 4;
    const isNameValid = nameLevel > 1;

    const isValid = isFormFilled && isPasswordValid && emailValid && isNameValid && cpfValid;

    return{
        isValid
    }


}