const mockCategories: Category[] = [
  {
    id_category: 1,
    name: "RPG",
    description: "Jogos de RPG ou com elementos presentes de Role Playing Games",
    image: "https://picsum.photos/300/200"
  },
  {
    id_category: 2,
    name: "FPS",
    description: "Jogos de tiro em primeira pessoa",
    image: "https://picsum.photos/300/200"
  },
  {
    id_category: 3,
    name: "Corrida",
    description: "Jogos com alta velocidade envolvida, aposte corrida e vença na linha de chegada",
    image: "https://picsum.photos/300/200"
  },
  {
    id_category: 4,
    name: "Ação e Aventura",
    description: "Jogos com muita pancaria envolvida, aposte corrida e vença na linha de chegada",
    image: "https://picsum.photos/300/200"
  }
]

export async function fetchCategories(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
    // só pra simular delay de rede, quando for a API real,
    // faça o favor de retirar o setTimeout(funcao, tempo minimo até ativar em "ms")
    // e crie uma pasta só para os mocks.
  return mockCategories;
}