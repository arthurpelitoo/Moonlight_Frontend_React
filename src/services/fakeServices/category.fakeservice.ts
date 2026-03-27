const mockCategory: Category[] = [
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

export async function fetchCategoryMock(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategory;
}

export async function fetchCategoryByIdMock(id: number): Promise<Category | Error> {
  await new Promise(resolve => setTimeout(resolve, 500));

    const category = mockCategory.find(cat => cat.id_category === id);

    if(!category){
      throw new Error("Categoria não encontrada");
    }

    return category;
}