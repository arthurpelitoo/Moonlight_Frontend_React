import type { ReactNode } from "react"

type CardStyle = "primary" | "secondary";

type CardProps = {
    children?: ReactNode // texto dentro do botão
    className?: string
    variant?: CardStyle // variantes de estilo
}

export function Card({children, variant = "primary", className = ""} : CardProps){

    const classMap = {
        "primary": "bg-night text-white rounded-xl p-4 " + className,
        "secondary": "bg-white text-black rounded-xl p-4 " + className
    }

    const classNamePattern = classMap[variant];

    return(
        <div className={classNamePattern}>
            {children}
        </div>
    )
    
}
