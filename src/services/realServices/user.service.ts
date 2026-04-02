import { sanitizeData } from "../../utils/sanitizer/sanitizer";
import { api } from "../api";
import { updateMeMock } from "../fakeServices/user.fakeservice";

export async function getAllUsers(){
    // if (import.meta.env.VITE_USE_MOCK === "true") {
    //     return getAllUsersMock();
    // }
    const response = await api.get(`/users/`);
    return response.data;
}

export async function getUserById(id_user: number) {
    // if (import.meta.env.VITE_USE_MOCK === "true") {
    //     return getUserByIdMock(id_user);
    // }
    const response = await api.get(`/users/${id_user}`);
    return response.data;
}

export async function updateUser(id_user: number, data: { name: string; cpf: string; type: "customer" | "admin" }) {
    const cleanData = sanitizeData(data);
    const response = await api.put(`/users/${id_user}`, cleanData);
    return response.data;
}

export async function deleteUser(id_user: number) {
    const response = await api.delete(`/users/${id_user}`);
    return response.data;
}


// /me para edição permitida do usuario
// email ta aqui pra ajudar o backend a encontrar o usuario certo pra atualizar.
export async function updateMe(data: { name: string; email: string; cpf: string; password: string; }) {

    const cleanData = sanitizeData(data);
    if (import.meta.env.VITE_USE_MOCK === "true") {
        return updateMeMock(cleanData);
    }

    const response = await api.put("/users/me", cleanData);
    return response.data;
}