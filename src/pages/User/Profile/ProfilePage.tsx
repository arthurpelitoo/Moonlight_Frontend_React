import { AddressBookIcon, CoffeeIcon, EnvelopeIcon, UserIcon } from "@phosphor-icons/react";
import { Card } from "../../../components/common/Generic/Card";
import { BackgroundCircle } from "../../../components/common/Generic/DecorativeBackground/BackgroundCircle";
import { useAuth } from "../../../hooks/auth/useAuth";
import { formatCPF } from "../../../utils/Validation/dataRules/cpf";
import { EditForm } from "./sections/EditForm";


function ProfilePage() {
  const {user} = useAuth();

  return (
    <main className="min-h-screen bg-gradient-to-b from-night-soft via-night to-night flex items-center justify-center px-4">
        <BackgroundCircle/>

        <div className="p-10 relative w-full flex flex-col gap-10 max-lg:max-w-md lg:max-w-xl animate-fade-in">
          <Card className="flex flex-col gap-10 bg-white/5 border border-white/8 rounded-sm p-8 backdrop-blur-sm">
            <h1 className="text-2xl text-center">Meu Perfil:</h1>
            { user && (
              <div className="flex flex-col items-center">
                <p className="flex items-center"><UserIcon size={32} weight="thin" /> Nome: {user.name}</p>
                <p className="flex items-center"><EnvelopeIcon size={32} weight="thin" /> Email: {user.email}</p>
                <p className="flex items-center"><AddressBookIcon size={32} weight="thin" /> Cpf: {formatCPF(user.cpf)}</p>
                {user.type === "admin" && (
                  <p className="flex items-center"><CoffeeIcon size={32} weight="thin" /> Admin</p>
                )}
              </div>
            )}
          </Card>
          <Card className="flex flex-col gap-10 bg-white/5 border border-white/8 rounded-sm p-8 backdrop-blur-sm">
            <h1 className="text-2xl">Editar Usuario:</h1>
            <EditForm/>
          </Card>
        </div>
    </main>
  )
}


export default ProfilePage;
