import { AddressBookIcon, ArrowRightIcon, CheckIcon, EnvelopeIcon,
         EyeIcon, EyeSlashIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { InputFieldForm } from "../InputFieldForm/InputFieldForm";
import { PasswordStrength } from "../VerifyComponents/PasswordStrengthVerify/PasswordStrength";
import { Button } from "../Button/Button";
import { EmailVerify } from "../VerifyComponents/EmailVerify/EmailVerify";
import { ConfirmPassVerify } from "../VerifyComponents/ConfirmPassVerify/ConfirmPassVerify";
import { UsernameVerify } from "../VerifyComponents/UsernameVerify/UsernameVerify";
import { CpfVerify } from "../VerifyComponents/CpfVerify/CpfVerify";
import { useRegisterForm } from "../../../hooks/validation/useRegisterForm.ts";
import { LoadingDots } from "../LoadingDots/LoadingDots.tsx";

export function RegisterForm() {
    const {
        fields, ui, showErrors,
        setField, setCpf, handleBlur,
        toggleShowPassword, toggleShowConfirm,
        handleSubmit,
    } = useRegisterForm();

    // Tela de sucesso
    if (ui.submitted && !ui.apiError && ui.success) {
        return (
            <div className="flex flex-col items-center gap-6 py-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                    <CheckIcon size={32} className="text-emerald-400" weight="bold" />
                </div>
                <h3 className="text-white text-lg font-light tracking-wider">Conta criada!</h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 w-full">

            <InputFieldForm
                id="reg-username" label="Nome de usuário" type="text"
                value={fields.username} onChangeState={setField("username")}
                onBlur={handleBlur("username")} maxLength={16}
                icon={<UserIcon size={18} />} placeholder="Escreva seu nome"
            />
            <UsernameVerify username={fields.username} showError={showErrors.showErrorUser} />

            <InputFieldForm
                id="reg-cpf" label="CPF" type="text" inputMode="numeric"
                autoComplete="off" value={fields.cpf} onChangeState={setCpf}
                onBlur={handleBlur("cpf")} maxLength={14}
                icon={<AddressBookIcon size={32} weight="thin" />}
                placeholder="ex: 000.000.000-00"
            />
            <CpfVerify cpf={fields.cpf} showError={showErrors.showErrorCpf} />

            <InputFieldForm
                id="reg-email" label="Email" type="email"
                value={fields.email} onChangeState={setField("email")}
                onBlur={handleBlur("email")} maxLength={30}
                icon={<EnvelopeIcon size={18} />} placeholder="Escreva seu email"
            />
            <EmailVerify email={fields.email} showError={showErrors.showErrorEmail} />

            <InputFieldForm
                id="reg-password" label="Senha"
                type={ui.showPassword ? "text" : "password"}
                value={fields.password} onChangeState={setField("password")}
                onBlur={handleBlur("password")} maxLength={16}
                icon={<LockKeyIcon size={18} />} placeholder="Escreva uma senha forte"
                rightElement={
                    <Button onClick={toggleShowPassword} className="p-0.5 bg-white/5 border rounded-md">
                        {ui.showPassword ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                }
            />
            <PasswordStrength password={fields.password} showError={showErrors.showErrorPassword} />

            <InputFieldForm
                id="reg-confirm" label="Confirmar senha"
                type={ui.showConfirm ? "text" : "password"}
                value={fields.confirmPassword} onChangeState={setField("confirmPassword")}
                onBlur={handleBlur("confirmPassword")} maxLength={16}
                icon={<LockKeyIcon size={18} />} placeholder="Confirme a senha"
                rightElement={
                    <Button onClick={toggleShowConfirm} className="p-0.5 bg-white/5 border rounded-md">
                        {ui.showConfirm ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                }
            />
            <ConfirmPassVerify
                password={fields.password}
                confirmPassword={fields.confirmPassword}
                showError={showErrors.showErrorConfirmPass}
            />

            {ui.apiError && (
                <p className="text-sm text-red-400 text-center">{ui.apiError}</p>
            )}

            <Button
                onClick={handleSubmit} disabled={ui.loading}
                as="button" 
                className="w-full text-white py-3.5 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-white/90 hover:text-night active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-2"
            >
                {ui.loading ? <LoadingDots /> : <>Criar Conta <ArrowRightIcon size={16} weight="bold" /></>}
            </Button>

            <p className="text-center text-xs text-white/30">
                Já tem uma conta?{" "}
                <Button variant="transparent" as="link" href="/login"
                    className="text-white/70 hover:text-white underline-offset-2 hover:underline transition-all">
                    Fazer login
                </Button>
            </p>
        </div>
    );
}