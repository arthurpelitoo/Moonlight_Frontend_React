import { isPasswordConfirmed } from "./dataRules/confirmPass";
import { isValidCPF } from "./dataRules/cpf";
import { getPasswordVerifiedLevel } from "./dataRules/password";
import { getNameVerifiedLevel } from "./dataRules/name";

export function validateEditUser(data: {
    name: string,
    password: string,
    confirmPassword: string,
    cpf: string
}) {

    const { name, password, confirmPassword, cpf } = data;

    const nameLevel = getNameVerifiedLevel(name);
    const strengthLevel = getPasswordVerifiedLevel(password);
    const passwordMatch = isPasswordConfirmed(password, confirmPassword);
    const cpfValid = isValidCPF(cpf);

    const isFormFilled = !!(name && password && confirmPassword && cpf);
    const isPasswordValid = passwordMatch && strengthLevel > 4;
    const isNameValid = nameLevel > 1;

    const isValid = isFormFilled && isPasswordValid && isNameValid && cpfValid  ;

    return{
        isValid
    }


}