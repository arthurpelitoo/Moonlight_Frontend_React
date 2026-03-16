import type { ReactNode } from "react"

type ButtonStyle = "primary" | "secondary" | "cta";

type ButtonProps = {
    children?: ReactNode // texto dentro do botão
    icon?: ReactNode // icone dentro do botão
    as?: "button" | "a" // se a tag vai ser button ou a
    href?: string // se for a então precisará levar pra algum lugar ou link.
    onClick?: () => void // se for button precisará ter alguma função.
    variant?: ButtonStyle // variantes de estilo
}

export function Button({children, icon, as = "button", href, onClick, variant = "primary"} : ButtonProps){

    const classMap = {
        "primary": "bg-night text-white",
        "secondary": "bg-white text-black",
        "cta": "bg-blue text-black"
    }

    const className = classMap[variant];

    if(as === "a"){
        return(
            <a href={href} className={className}>
                {icon}
                {children}
            </a>
        )
    }

    return(
        <button onClick={onClick} className={className}>
            {icon}
            {children}
        </button>
    )
}
