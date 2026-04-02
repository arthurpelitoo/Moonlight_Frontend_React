import { AddressBookIcon, ArrowRightIcon, CheckIcon, EnvelopeIcon, EyeIcon, EyeSlashIcon, LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { useAuth } from "../../../../hooks/auth/useAuth";
import { useEditForm } from "../../../../hooks/validation/useEditForm";
import { InputFieldForm } from "../../../../components/common/Forms/InputFieldForm/InputFieldForm";
import { NameVerify } from "../../../../components/common/Forms/VerifyComponents/NameVerify/NameVerify";
import { CpfVerify } from "../../../../components/common/Forms/VerifyComponents/CpfVerify/CpfVerify";
import { Button } from "../../../../components/common/Generic/Button/Button";
import { PasswordStrength } from "../../../../components/common/Forms/VerifyComponents/PasswordStrengthVerify/PasswordStrength";
import { ConfirmPassVerify } from "../../../../components/common/Forms/VerifyComponents/ConfirmPassVerify/ConfirmPassVerify";
import { LoadingDots } from "../../../../components/common/Forms/LoadingDots/LoadingDots";


export function EditForm(){
    const {user} = useAuth();
    
    const {fields, setField, setCpf, showErrors, ui, toggleShowPassword, toggleShowConfirm, handleBlur, handleSubmit} = useEditForm({
        name: user?.name ?? "",
        cpf: user?.cpf ?? ""
    });

    if(!user) return null;
    
    /**
     * sucesso
     */
    if(ui.success && ui.submitted && !ui.apiError){
        return (
            <div className="flex flex-col items-center gap-6 py-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                    <CheckIcon size={32} className="text-emerald-400" weight="bold" />
                </div>
                <h3 className="text-white text-lg font-light tracking-wider">Alterações Realizadas com sucesso!</h3>
            </div>
        );
    }

    return(
        <div className="flex flex-col gap-3 w-full">
            <InputFieldForm 
                id="edit-name" 
                label="Nome de usuário" 
                type="text" 
                value={fields.name}
                onChangeState={setField("name")}
                onBlur={handleBlur("name")}
                maxLength={16} 
                icon={<UserIcon size={18} />} 
                placeholder="Meu nome de usuário" />
            <NameVerify name={fields.name} showError={showErrors.showErrorUser}/>
            
            <InputFieldForm className="" id="edit-email" label="Email" type="email" value={user.email} icon={<EnvelopeIcon size={18} />} placeholder="Meu Email" disabled />

            <InputFieldForm 
                id="edit-cpf" 
                label="CPF" 
                type="text" 
                value={fields.cpf} 
                inputMode="numeric"
                autoComplete="off"
                onChangeState={setCpf}
                onBlur={handleBlur("cpf")}
                maxLength={14} 
                icon={<AddressBookIcon size={18} weight="thin" />}
                placeholder="Meu Cpf" 
                />
            <CpfVerify cpf={fields.cpf} showError={showErrors.showErrorCpf}/>


            <InputFieldForm 
                id="edit-password" 
                label="Senha" 
                type={ui.showPassword ? "text" : "password"}
                value={fields.password} onChangeState={setField("password")}
                onBlur={handleBlur("password")}
                placeholder="Minha Senha ou outra nova"
                maxLength={16}
                icon={<LockKeyIcon size={18} />}
                rightElement={
                    <Button onClick={toggleShowPassword} className="p-0.5 bg-white/5 border rounded-md">
                        {ui.showPassword ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                } 
                />
            <PasswordStrength password={fields.password} showError={showErrors.showErrorPassword}/>

            <InputFieldForm 
                id="edit-confirm" 
                label="Confirmar Senha" 
                type={ui.showPassword ? "text" : "password"}
                value={fields.confirmPassword} onChangeState={setField("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                placeholder="Confirme a Senha"
                maxLength={16}
                icon={<LockKeyIcon size={18} />}
                rightElement={
                    <Button onClick={toggleShowConfirm} className="p-0.5 bg-white/5 border rounded-md">
                        {ui.showConfirm ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                    </Button>
                } 
                />
            <ConfirmPassVerify confirmPassword={fields.confirmPassword} password={fields.password} showError={showErrors.showErrorConfirmPass}/>

            {ui.apiError && (
                <p className="text-sm text-red-400 text-center">{ui.apiError}</p>
            )}

            <Button
                onClick={handleSubmit} disabled={ui.loading}
                as="button" 
                className="w-full text-white py-3.5 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-white/90 hover:text-night active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 mt-2"
            >
                {ui.loading ? <LoadingDots /> : <>Finalizar Alterações <ArrowRightIcon size={16} weight="bold" /></>}
            </Button>
        </div>
    )
}