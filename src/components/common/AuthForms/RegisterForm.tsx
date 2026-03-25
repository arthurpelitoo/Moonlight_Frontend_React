import { AddressBookIcon, ArrowRightIcon, CheckIcon, EnvelopeIcon, EyeIcon, EyeSlashIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { InputFieldForm } from "../InputFieldForm/InputFieldForm";
import { PasswordStrength } from "../PasswordStrength/PasswordStrength";
import { useState } from "react";
import { Button } from "../Button/Button";
import { EmailVerify } from "../EmailVerify/EmailVerify";
import { validateRegister } from "../../../utils/Validation/ValidateRegister";

interface RegisterFormProps {
    onSwitch: () => void;
}
 
export function RegisterForm({ onSwitch }: RegisterFormProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false); //função de mostrar senha
    const [showConfirm, setShowConfirm] = useState(false);

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { isValid } = validateRegister({
        username,
        email,
        password,
        confirmPassword,
        cpf
    })
    
    const canSubmit = isValid;
 
    const handleSubmit = () => {
        if (!canSubmit) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 2000);
    };
 
    if (submitted) {
        return (
            <div className="flex flex-col items-center gap-6 py-8 text-center">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                    <CheckIcon size={32} className="text-emerald-400" weight="bold" />
                </div>
                <div>
                    <h3 className="text-white text-lg font-light tracking-wider mb-2">Conta criada!</h3>
                </div>
                <Button
                    onClick={onSwitch}
                    className="text-xs text-white/50 hover:text-white/80 transition-colors tracking-widest uppercase"
                >
                    Ir para o Login →
                </Button>
            </div>
        );
    }
 
    return (
        <div className="flex flex-col gap-3 w-full">
            <InputFieldForm
                className="w-full pl-2"
                id="reg-username"
                label="Nome de usuário"
                type="text"
                value={username}
                onChangeState={setUsername}
                icon={<UserIcon size={18} />}
                // error={errors.username}
                placeholder="Escreva seu nome"
            />
            <InputFieldForm
                className="w-full pl-2"
                id="reg-cpf"
                label="Cpf"
                type={"text"}
                value={cpf}
                onChangeState={setCpf}
                icon={<AddressBookIcon size={32} weight="thin" />}
                placeholder="000.000.000-00"
                // error={errors.cpf}
            />
            <InputFieldForm
                className="w-full pl-2"
                id="reg-email"
                label="Email"
                type="email"
                value={email}
                // error={errors.email}
                onChangeState={setEmail}
                icon={<EnvelopeIcon size={18} />}
                placeholder="Escreva seu email"
            />
            <EmailVerify email={email}/>
            <InputFieldForm
                className="w-full pl-2"
                id="reg-password"
                label="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChangeState={setPassword}
                icon={<LockKeyIcon size={18} />}
                maxLength={16}
                // error={errors.password}
                placeholder="Escreva uma senha forte"
                rightElement={
                    <Button onClick={() => setShowPassword(!showPassword)} className="p-0.5 bg-white/5 border rounded-md transition-all duration-300 focus-within:border-white/40 focus-within:bg-white/8">
                        {showPassword ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                }
            />
            <PasswordStrength password={password} />
            <InputFieldForm
                className="w-full pl-2"
                id="reg-confirm"
                label="Confirmar senha"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChangeState={setConfirmPassword}
                icon={<LockKeyIcon size={18} />}
                maxLength={16}
                placeholder="Confirme a senha"
                rightElement={
                    <Button onClick={() => setShowConfirm(!showConfirm)} className="p-0.5 bg-white/5 border rounded-md transition-all duration-300 focus-within:border-white/40 focus-within:bg-white/8">
                        {showConfirm ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                }
            />
 
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
                        Criar Conta
                        <ArrowRightIcon size={16} weight="bold" />
                    </>
                )}
            </Button>
 
            <p className="text-center text-xs text-white/30">
                Já tem uma conta?{" "}
                <Button variant="transparent" onClick={onSwitch} className="text-white/70 hover:text-white underline-offset-2 hover:underline transition-all">
                    Fazer login
                </Button>
            </p>
        </div>
    );
}