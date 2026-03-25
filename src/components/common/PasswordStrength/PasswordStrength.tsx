import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { getStrengthLabelText, getStrengthLevel, passwordRules } from "../../../utils/Validation/PasswordStrength/PasswordStrength";

type PasswordStrengthProps = {
    password: string;
}
 
export function PasswordStrength({ password }: PasswordStrengthProps) {
    const level = getStrengthLevel(password); // Level (devolve do 5 até 0)
    const { labelText, color } = getStrengthLabelText(level); //LABEL diagnostico escrito
 
    if (!password) return null;
 
    return (
        <div className="flex flex-col gap-2 mt-1">
            {/* Barra de força */}
            <div className="flex gap-1">
                {/* se for nivel 0 nem gera as barras */}
                {[1, 2, 3, 4, 5].map((arrayIndexLevel) => (
                    <div
                        key={arrayIndexLevel}
                        className="h-0.5 flex-1 rounded-full transition-all duration-500"
                        style={{
                            backgroundColor: arrayIndexLevel <= level ? color : "rgba(255,255,255,0.1)",
                        }}
                    />
                ))}
            </div>
            {/* Label */}
            <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color }}>
                    {labelText}
                </span>
            </div>
            {/* Regras */}
            <div className="grid grid-cols-1 gap-1 mt-1">
                {/* array de objetos que devolve um array do tipo PasswordRule */}
                {passwordRules.map((rule) => {
                    const passed = rule.test(password);
                    return (
                        <div key={rule.label} className="flex items-center gap-2">
                            <span className={`transition-colors duration-300 ${passed ? "text-emerald-400" : "text-white/20"}`}>
                                {passed ? <CheckIcon size={12} weight="bold" /> : <XIcon size={12} weight="bold" />}
                            </span>
                            <span className={`text-xs transition-colors duration-300 ${passed ? "text-white/60" : "text-white/25"}`}>
                                {rule.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}