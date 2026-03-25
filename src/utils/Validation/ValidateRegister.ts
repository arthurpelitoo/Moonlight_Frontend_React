import { getEmailVerified } from "./EmailVerify/EmailVerify";
import { getStrengthLevel } from "./PasswordStrength/PasswordStrength";

export function validateRegister(data: {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    cpf: string
}) {

    const { username, email, password, confirmPassword, cpf } = data;

    const emailValid = getEmailVerified(email);
    const strengthLevel = getStrengthLevel(password);
    const passwordMatch = password === confirmPassword;

    const isFormFilled = !!(username && email && password && confirmPassword && cpf);
    const isPasswordValid = passwordMatch && strengthLevel > 4;
    const isEmailValid = emailValid;

    const isValid = isFormFilled && isPasswordValid && isEmailValid;

    return{
        isValid
    }


}