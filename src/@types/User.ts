declare global {
    interface User {
      id: number;
      nome: string;
      email: string;
      avatarUrl?: string; 
    }
}

export {}