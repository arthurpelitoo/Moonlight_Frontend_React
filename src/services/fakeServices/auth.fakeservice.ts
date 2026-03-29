import { isValidCPF } from "../../utils/Validation/dataRules/cpf";
import { isValidEmail } from "../../utils/Validation/dataRules/email";

export async function registerUserMock(data: {
  username: string;
  email: string;
  cpf: string;
  password: string;
}) { /* empacoto os dados em objeto e transformando o objeto em JSON mando pra rota tal em metodo post para o corpo de requisição (req.body) */
  await new Promise((resolve) => setTimeout(resolve, 1000));

    if(!data.username || data.username.length > 16 || data.username == "" ){
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
    
    return { message: "Usuário cadastrado com sucesso." };
  
}

export async function loginUserMock(data: {
  email: string;
  password: string;
}) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const validEmail = "teste@email.com"
  const validPassword = "Qwert678";

  if(data.email !== validEmail || data.password !== validPassword){
      throw new Error("Usuario ou senha inválidos.");
  }

  return {message: "Usuário autenticado", token: "mock-token-fake-12345", user: { id: 4, username: "carlos", email: "teste@email.com", cpf: "801.605.710-14"} };
}