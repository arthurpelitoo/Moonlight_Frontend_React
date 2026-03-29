import { isPasswordConfirmed } from "../dataRules/confirmPass";
import { isValidCPF } from "../dataRules/cpf";
import { isValidEmail } from "../dataRules/email";
import { getPasswordVerifiedLevel } from "../dataRules/password";
import { getUsernameVerifiedLevel } from "../dataRules/username";
import type { LoginFormData, LoginTouched, RegisterFormData, RegisterTouched } from "./formErrorsTypes";

export function getRegisterFormErrors(data: RegisterFormData, touched: RegisterTouched, submitted: boolean){
     /* validações para mostrar erro */
    const usernameLevel = getUsernameVerifiedLevel(data.username);
    const cpfValid = isValidCPF(data.cpf);
    const emailValid = isValidEmail(data.email);
    const strengthLevel = getPasswordVerifiedLevel(data.password);
    const passwordMatch = isPasswordConfirmed(data.password, data.confirmPassword);
    

    return {
        showErrorUser: (touched.username || submitted) && usernameLevel < 2,
        showErrorEmail: (touched.email || submitted) && !emailValid,
        showErrorCpf: (touched.cpf || submitted) && !cpfValid,
        showErrorPassword: (touched.password || submitted) && strengthLevel < 5,
        showErrorConfirmPass: (touched.confirmPassword || submitted) && !passwordMatch
    }
}

export function getLoginFormErrors(data: LoginFormData, touched: LoginTouched, submitted: boolean){
    const emailValid = isValidEmail(data.email);

    return {
        showErrorEmail: (touched.email || submitted) && !emailValid,
        showErrorPassword: (touched.password || submitted) && !data.password,
    }
}