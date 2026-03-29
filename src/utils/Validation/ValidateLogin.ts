import { isValidEmail } from "./dataRules/email";

export function validateLogin(data: {
    email: string,
    password: string,
}) {
    const { email, password } = data;

    const emailValid = isValidEmail(email);
    const isFormFilled = !!(email && password);

    const isValid = isFormFilled && emailValid;

    return{
        isValid
    }


}