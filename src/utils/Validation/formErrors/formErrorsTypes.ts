export type RegisterFormData = {
    username: string,
    email: string,
    cpf: string,
    password: string,
    confirmPassword: string
}

export type LoginFormData = {
    email: string,
    password: string
}

export type RegisterTouched = {
    username: boolean,
    email: boolean,
    cpf: boolean,
    password: boolean,
    confirmPassword: boolean
}

export type LoginTouched = {
    email: boolean,
    password: boolean
}