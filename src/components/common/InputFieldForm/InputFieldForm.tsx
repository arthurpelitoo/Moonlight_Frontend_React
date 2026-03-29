import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { InputBar } from "../InputBar/InputBar";

    type InputFieldFormProps = ComponentPropsWithoutRef<"input"> & {
        onChangeState?: (value: string) => void;
        icon?: ReactNode;
        rightElement?: ReactNode;
        label?: string;
        error?: string;
    };

export function InputFieldForm(props : InputFieldFormProps){
    const {className = "", onChange, onChangeState, icon, rightElement, label = "...:", id, error, ...rest } = props;

    const classPattern = `${className}`.trim();

    return(
        <>
            <label htmlFor={id} id={id} className="text-sm">{label}</label>
            <div className="flex items-center gap-3 bg-white/5 border rounded-md px-4 py-3 transition-all duration-300 focus-within:border-white/40 focus-within:bg-white/8">
                {icon}
                <InputBar
                    className={`${classPattern} w-full pl-2`}
                    onChange={(event) => {
                        onChange?.(event); // comportamento padrão
                        onChangeState?.(event.target.value); // comportamento simplificado
                    }}
                    variant="terciary"
                    id={id}
                    {...rest}
                />
                {rightElement}
            </div>
            {error && (
                <span className="text-xs text-red-400">{error}</span>
            )}
        </>
    )
}
