declare global {
    enum user_type_enum {
      "customer",
      "admin"  
    }

    interface User {
      id: number;
      name: string;
      cpf: string;
      email: string;
      password: string;
      created_at: Date;
      type: user_type_enum
    }
}

export {}