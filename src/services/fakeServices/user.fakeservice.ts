import { isValidCPF } from "../../utils/Validation/dataRules/cpf";
import { isValidEmail } from "../../utils/Validation/dataRules/email";

export async function updateMeMock(data: {name: string; email: string; cpf: string; password: string; }){
    if(!data.name || data.name.length > 16 || data.name == "" ){
        throw new Error("Nome de Usuário inválido ou obrigatório!");
    }

    if(!data.email || !isValidEmail(data.email)){
        throw new Error("Email inválido ou obrigatório!");
    }

    const mockedDatabase = ["juan@yahoo.com"]; 
    const userExists = mockedDatabase.includes(data.email.toLowerCase());

    if (userExists) {
        throw new Error('Usuário já existe com esse email!');
    }

    if(!isValidCPF(data.cpf)){
        throw new Error('CPF inválido!');
    }

    if(!data.password || data.password == "" || data.password.length > 16 || data.password.length < 8){
        throw new Error('Senha inválida ou obrigatória!');
    }

    return { message: "Usuário editado com sucesso.", token: "mock-token-fake-12345", user: { id: 4, name: data.name, email: data.email, cpf: data.cpf, type: "admin" } };
}