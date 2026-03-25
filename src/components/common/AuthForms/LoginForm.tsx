import { ArrowRightIcon, EnvelopeIcon, LockKeyIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { InputFieldForm } from "../InputFieldForm/InputFieldForm";

type LoginFormProps = {
    onSwitch: () => void;
}
 
export function LoginForm({ onSwitch }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const [submitted, setSubmitted] = useState(false);

    const canSubmit = email && password;
 
    const handleSubmit = () => {
        if (!canSubmit) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // setSubmitted(true);
            
        }, 2000);
    };

    // if(submitted){
        
    // }
 
    return (
        <div className="flex flex-col gap-3 w-full">
            <InputFieldForm
                className="w-full pl-2"
                id="login-email"
                name="Email"
                type="email"
                icon={<EnvelopeIcon size={18} />}
                value={email}
                onChangeState={setEmail}
                placeholder="Seu@email.com"
                label="Email:"
            />
            <InputFieldForm
                className="w-full pl-2"
                id="login-password"
                name="Senha"
                type="password"
                icon={<LockKeyIcon size={18} />}
                value={password}
                onChangeState={setPassword}
                placeholder="Escrever minha senha"
                label="Senha:"
                
            />
 
            <div className="flex justify-end">
                <Button variant="transparent" className="text-xs text-white/40 hover:text-white/70 transition-colors tracking-wider underline-offset-2 hover:underline">
                    Esqueceu a senha?
                </Button>
            </div>
 
            <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-night text-white py-3.5 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-white/90 hover:text-night active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-2"
            >
                {loading ? (
                    <span className="flex gap-1">
                        {[0, 1, 2].map((arrayIndex) => (
                            <span
                                key={arrayIndex}
                                className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
                                style={{ animationDelay: `${arrayIndex * 0.15}s` }}
                            />
                        ))}
                    </span>
                ) : (
                    <>
                        Entrar
                        <ArrowRightIcon size={16} weight="bold" />
                    </>
                )}
            </Button>
 
            <p className="text-center text-xs text-white/30">
                Não tem uma conta?{" "}
                <Button variant="transparent" onClick={onSwitch} className="text-white/70 hover:text-white underline-offset-2 hover:underline transition-all">
                    Criar conta
                </Button>
            </p>
        </div>
    );
}