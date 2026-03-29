import { getUsernameVerifiedLevel } from "../../../../utils/Validation/dataRules/username";

type UsernameVerifyProps = {
    username: string;
    showError: boolean
}

function getVerifiedLabelText(level: number): { labelText: string; color: string } {
    if (level === 0) return { labelText: "", color: "" };
    if (level === 1) return { labelText: "Insira 1 ou até 16 caracteres", color: "#E24B4A" };
    return { labelText: "", color: "#1D9E75" };
}
 
export function UsernameVerify({ username, showError }: UsernameVerifyProps) {
    const passed = getUsernameVerifiedLevel(username); 
    const { labelText, color } = getVerifiedLabelText(passed); 
 
    if (!showError) return null;
    return (
        <div className="flex flex-col gap-2 mt-1">
            {/* Condição pra saber se está verificado e mostrar a cor verde na barra*/}
            <div className="flex gap-1">
                <div
                    className="h-0.5 flex-1 rounded-full transition-all duration-500"
                    style={{
                        backgroundColor: passed ? color : "rgba(255,255,255,0.1)",
                    }}
                />
            </div>
            {/* feedback via texto pro usuario */}
            <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color }}>
                    {labelText}
                </span>
            </div>
        </div>
    );
}