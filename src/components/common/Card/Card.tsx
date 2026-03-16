import type { ReactNode } from "react"

type CardStyle = "primary" | "secondary";

type CardProps = {
    children?: ReactNode // texto dentro do botão
    variant?: CardStyle // variantes de estilo
}

export function Card({children, variant = "primary"} : CardProps){

    const classMap = {
        "primary": "bg-night text-white rounded-xl p-4",
        "secondary": "bg-white text-black rounded-xl p-4"
    }

    const className = classMap[variant];

    return(
        <div className={className}>
            {children}
        </div>
    )
    
}
