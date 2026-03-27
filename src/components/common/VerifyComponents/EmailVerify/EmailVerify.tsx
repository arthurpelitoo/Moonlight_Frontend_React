import { isValidEmail } from "../../../../utils/Validation/email";

type EmailVerifyProps = {
    email: string;
    showError: boolean
}
 
export function EmailVerify({ email, showError }: EmailVerifyProps) {
    const passed = isValidEmail(email); 

    if (!showError) return null;

    return (
        <div className="flex flex-col gap-2 mt-1">
            {/* Condição pra saber se está verificado e mostrar a cor verde na barra*/}
            <div className="flex gap-1">
                <div
                    className="h-0.5 flex-1 rounded-full transition-all duration-500"
                    style={{
                        backgroundColor: passed ? "#1D9E75" : "#EF4444",
                    }}
                />
            </div>
            {/* feedback via texto pro usuario */}
            <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: passed ? "#1D9E75" : "#EF4444" }}>
                    {passed ? "" : "O email não é válido"}
                </span>
            </div>
            {/* Regras se houver mais. */}
            {/* <div className="grid grid-cols-1 gap-1 mt-1">
                <div className="flex items-center gap-2">
                    <span className={`transition-colors duration-300 ${passed ? "text-emerald-400" : "text-white/20"}`}>
                        {passed ? <CheckIcon size={12} weight="bold" /> : <XIcon size={12} weight="bold" />}
                    </span>
                    <span className={`text-xs transition-colors duration-300 ${passed ? "text-white/60" : "text-white/25"}`}>
                        {emailRules.label}
                    </span>
                </div>
            </div> */}
        </div>
    );
    
}