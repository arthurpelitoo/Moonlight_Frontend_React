
type PasswordVerifyProps = {
    password: string;
    showError: boolean
}
 
export function PasswordVerify({ password, showError }: PasswordVerifyProps) {
    const passed = !!password; 

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
                    {passed ? "" : "Preencha a senha"}
                </span>
            </div>
        </div>
    );
    
}