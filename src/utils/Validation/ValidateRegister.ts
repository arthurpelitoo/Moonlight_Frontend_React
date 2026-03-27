import { isPasswordConfirmed } from "./confirmPass";
import { isValidCPF } from "./cpf";
import { isValidEmail } from "./email";
import { getPasswordVerifiedLevel } from "./password";
import { getUsernameVerifiedLevel } from "./username";

export function validateRegister(data: {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    cpf: string
}) {

    const { username, email, password, confirmPassword, cpf } = data;

    const usernameLevel = getUsernameVerifiedLevel(username);
    const emailValid = isValidEmail(email);
    const strengthLevel = getPasswordVerifiedLevel(password);
    const passwordMatch = isPasswordConfirmed(password, confirmPassword);
    const cpfValid = isValidCPF(cpf);

    const isFormFilled = !!(username && email && password && confirmPassword && cpf);
    const isPasswordValid = passwordMatch && strengthLevel > 4;
    const isUsernameValid = usernameLevel > 1;

    const isValid = isFormFilled && isPasswordValid && emailValid && isUsernameValid && cpfValid;

    return{
        isValid
    }


}