export function isPriceValid(price: string): boolean {
    const value = parseFloat(price);
    // O preço é válido se for um número real e não for negativo
    return !isNaN(value) && value >= 0;
}

export const maskPrice = (value: string) => {
    // Remove tudo que não é número (ex: "49,90" -> "4990")
    const onlyNumbers = value.replace(/\D/g, "");

    // Se o campo estiver vazio, retorna "0.00" para não quebrar o estado
    if (!onlyNumbers) return "0.00";

    // Transforma em número e divide por 100 para criar as casas decimais
    // Ex: "4990" vira 49.9
    const numberValue = Number(onlyNumbers) / 100;

    // Formata como string com ponto decimal fixo em 2 casas
    return numberValue.toFixed(2);
};