import { AddressBookIcon, ArrowRightIcon, CheckIcon, EnvelopeIcon, EyeIcon, EyeSlashIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { InputFieldForm } from "../InputFieldForm/InputFieldForm";
import { PasswordStrength } from "../PasswordStrengthVerify/PasswordStrength";
import { useState } from "react";
import { Button } from "../Button/Button";
import { EmailVerify } from "../EmailVerify/EmailVerify";
import { validateRegister } from "../../../utils/Validation/ValidateRegister";
import { ConfirmPassVerify } from "../ConfirmPassVerify/ConfirmPassVerify";
import { UsernameVerify } from "../UsernameVerify/UsernameVerify";
import { getUsernameVerifiedLevel } from "../../../utils/Validation/username";
import { isValidEmail } from "../../../utils/Validation/email";
import { getPasswordVerifiedLevel } from "../../../utils/Validation/password";
import { isPasswordConfirmed } from "../../../utils/Validation/confirmPass";
import { isValidCPF } from "../../../utils/Validation/cpf";
import { CpfVerify } from "../CpfVerify/CpfVerify";
import { registerUser } from "../../../services/auth.service";

interface RegisterFormProps {
    onSwitch: () => void;
}
 
export function RegisterForm({ onSwitch }: RegisterFormProps) {
    
    /* Pegar dados dos inputs via useState */
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /* Mostrar senha via useState */
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirm, setShowConfirm] = useState(false);

    /* animação de carregamento via useState(nao dá pra colocar no hooks) */
    const [loading, setLoading] = useState(false);

    /* submitted para saber se usuario clicou no botão criar conta | touched se clicou em algum input e soltou */
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState({ username: false, email: false, cpf: false, password: false, confirmPassword: false });

    /* pra definir o touched do input dinamicamente: handleBlur("email") */
    const handleBlur = (field: keyof typeof touched) => () => { /* me dê as chaves(username) e tipos(: boolean) do objeto touched */
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    /* mascara para o cpf */
    function formatCPF(value: string) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    /* validações para mostrar erro (sei que isso é ruim, pois sao duas fontes de verdade num componente, quando sobrar tempo melhoro) */
    const usernameLevel = getUsernameVerifiedLevel(username);
    const cpfValid = isValidCPF(cpf);
    const emailValid = isValidEmail(email);
    const strengthLevel = getPasswordVerifiedLevel(password);
    const passwordMatch = isPasswordConfirmed(password, confirmPassword);

    /* mostrar erro nos inputs quando o usuario clicar no botão "criar conta" ou soltar input com erros. */
    const showErrorUser = (touched.username || submitted) && usernameLevel <= 1;
    const showErrorEmail = (touched.email || submitted) && !emailValid;
    const showErrorCpf = (touched.cpf || submitted) && !cpfValid;
    const showErrorPassword = (touched.password || submitted) && strengthLevel < 5;
    const showErrorConfirmPass = (touched.confirmPassword || submitted) && !passwordMatch;

    /* mostrar erro da Api de maneira amigável */
    const [error, setError] = useState<string | null>(null);

    /* validação pra passar e conseguir acessar rota api */
    const { isValid } = validateRegister({ username, email, password, confirmPassword, cpf });
    
    /* função do botão para fazer cadastro e receber resposta token ou de erro pela API. */
    const handleSubmit = async () => {
        setSubmitted(true);
        
        if(!isValid) return 
        
        try{
            setLoading(true);

            const data = await registerUser({username, cpf, email, password});

            localStorage.setItem("token", data.token);
        } catch(err){
            if (err instanceof Error) {
                setError(err.message);
            } else{
                setError("Erro inesperado.");
            }
        }

    };

    
    /* se usuario clicou no botão e é válido. (ainda precisa testar como vai ficar quando receber erro)*/
    if (submitted && isValid && !error) {
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
                onBlur={handleBlur("username")}
                maxLength={16}
                icon={<UserIcon size={18} />}
                // error={errors.username}
                placeholder="Escreva seu nome"
            />
            <UsernameVerify username={username} showError={showErrorUser}/>
            <InputFieldForm
                className="w-full pl-2"
                id="reg-cpf"
                label="CPF"
                type={"text"}
                inputMode={"numeric"}
                autoComplete={"off"}
                value={cpf}
                onChangeState={(value) => (setCpf(formatCPF(value)))}
                onBlur={handleBlur("cpf")}
                maxLength={14}
                icon={<AddressBookIcon size={32} weight="thin" />}
                placeholder="ex: 000.000.000-00"
            />
            <CpfVerify cpf={cpf} showError={showErrorCpf} />
            <InputFieldForm
                className="w-full pl-2"
                id="reg-email"
                label="Email"
                type="email"
                value={email}
                maxLength={30}
                onChangeState={setEmail}
                onBlur={handleBlur("email")}
                icon={<EnvelopeIcon size={18} />}
                placeholder="Escreva seu email"
            />
            <EmailVerify email={email} showError={showErrorEmail}/>
            <InputFieldForm
                className="w-full pl-2"
                id="reg-password"
                label="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChangeState={setPassword}
                onBlur={handleBlur("password")}
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
            <PasswordStrength password={password} showError={showErrorPassword} />
            <InputFieldForm
                className="w-full pl-2"
                id="reg-confirm"
                label="Confirmar senha"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChangeState={setConfirmPassword}
                onBlur={handleBlur("confirmPassword")}
                icon={<LockKeyIcon size={18} />}
                maxLength={16}
                placeholder="Confirme a senha"
                rightElement={
                    <Button onClick={() => setShowConfirm(!showConfirm)} className="p-0.5 bg-white/5 border rounded-md transition-all duration-300 focus-within:border-white/40 focus-within:bg-white/8">
                        {showConfirm ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                }
            />
            <ConfirmPassVerify password={password} confirmPassword={confirmPassword} showError={showErrorConfirmPass}/>
 
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
            {error && (
                <p className="text-red-500 text-xs">
                    {error}
                </p>
            )}
        </div>
    );
}