/* <T extends object> é um Generic. "Esta função aceita qualquer tipo T, desde que seja um objeto". */
export function sanitizeData<T extends object>(data: T): T {  /* (data: T): T: Garante que o que entra como um tipo (ex: dados do formulario:{ tal:string, a:number... }) saia do mesmo tipo */

    /* Object.entries pega o objeto e o transforma em um array de arrays (matriz). */
  const entries = Object.entries(data).map(([key, value]) => {  /* Se passar { nome: " palmeira ", cpf: "123" }, ele vira: [ ["nome", " palmeira "], ["cpf", "123"] ]. */
    
    /* Se o valor for um número, booleano ou outro objeto, ele fica intacto. Não faz sentido tentar dar trim() em um número. */
    if (typeof value !== "string") return [key, value];

    let cleanValue = value.trim(); /* Remove espaços: "  user  " -> "user" */
    if (key === "cpf") cleanValue = cleanValue.replace(/\D/g, ""); /* Remove tudo que não é número */
    if (key === "email") cleanValue = cleanValue.toLowerCase(); /* Normaliza para minúsculo */

    return [key, cleanValue];
  });

  return Object.fromEntries(entries) as T; /* Faz o caminho inverso, pega o array de arrays limpos e os transforma de volta em um objeto {}.*/
}