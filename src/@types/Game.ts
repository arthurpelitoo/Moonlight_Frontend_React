
type GameActiveType = "Y" | "N";

export interface Game {
    id_game: number;
    title: string;
    description: string;
    price: number;
    image: string;
    link: string;
    launch_date: Date;
    active: GameActiveType;
    stock_available: number;
}

export {} // isso é necessário para que o arquivo seja tratado como módulo e não de escopo global puro