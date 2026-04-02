import { Link } from "react-router-dom";
import type { ButtonProps } from "./Button.types";
 
  const variantClass = {
    primary: "bg-night text-white",
    secondary: "bg-white text-black",
    cta: "bg-blue-500 text-white",
    transparent: "bg-transparent"
  };
 
export function Button(props: ButtonProps) {
  const { children, icon, className = "", variant = "primary", as = "button" } = props;

  const classPattern = `${variantClass[variant]} ${className}`.trim();
 
  if (as === "a") {
    const { href, ...rest } = props as Extract<ButtonProps, { as: "a" }>;
    // Utility type do TypeScript : Extract<...>
    // extraia um tipo de dentro do ButtonProps onde as = "a"
    // type Resultado = ButtonAsAnchor;
    
    return (
      <a href={href} {...rest} className={classPattern}>
        {icon}
        {children}
      </a>
    );
  }
 
  if (as === "link") {
    const { href } = props as Extract<ButtonProps, { as: "link" }>;
    return (
      <Link to={href} className={classPattern}>
        {icon}
        {children}
      </Link>
    );
  }
 
  const { ...rest } = props as Extract<ButtonProps, { as?: "button" }>;

  return (
    <button {...rest} className={`${classPattern} cursor-pointer`}>
      {icon}
      {children}
    </button>
  );
}