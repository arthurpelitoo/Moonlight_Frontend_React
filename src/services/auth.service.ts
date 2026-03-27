import { sanitizeData } from "../utils/Sanitizer/sanitizer";
import { api } from "./api";
import { loginUserMock, registerUserMock } from "./fakeServices/auth.fakeservice";

export async function registerUser(data: {
  username: string;
  email: string;
  cpf: string;
  password: string;
}) { /* empacoto os dados em objeto e transformando o objeto em JSON mando pra rota tal em metodo post para o corpo de requisição (req.body) */

    const cleanData = sanitizeData(data);

    if (import.meta.env.VITE_USE_MOCK === "true") {
        return registerUserMock(cleanData);
    }

  const response = await api.post("/register", cleanData);
  return response.data;
}

export async function loginUser(data: {
  email: string;
  password: string;
}) { /* empacoto os dados em objeto e transformando o objeto em JSON mando pra rota tal em metodo post para o corpo de requisição (req.body) */

    const cleanData = sanitizeData(data);

    if(import.meta.env.VITE_USE_MOCK === "true"){
        return loginUserMock(cleanData);
    }

    const response = await api.post("/login", cleanData);
    return response.data;
}