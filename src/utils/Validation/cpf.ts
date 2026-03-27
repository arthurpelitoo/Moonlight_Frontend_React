import { cpf } from "cpf-cnpj-validator";

export function isValidCPF(cpfValue: string): boolean {
  return cpf.isValid(cpfValue);
}