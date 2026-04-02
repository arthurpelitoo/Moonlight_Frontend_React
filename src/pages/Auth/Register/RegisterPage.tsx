import { Button } from "../../../components/common/Generic/Button/Button";
import logo from "@/assets/MoonlightIcone.png";
import { BackgroundCircle } from "../../../components/common/Generic/DecorativeBackground/BackgroundCircle";
import { Card } from "../../../components/common/Generic/Card";
import { AuthTabs } from "../../../components/common/Forms/AuthTabs/AuthTabs";
import { RegisterForm } from "./sections/RegisterForm";

function RegisterPage() {
 
    return (
          <main className="min-h-screen bg-gradient-to-b from-night-soft via-night to-night flex items-center justify-center px-4">
            {/* Fundo decorativo */}
              <BackgroundCircle />
 
              <div className="relative w-full max-w-md animate-fade-in">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Button as="link" href="/" className="bg-transparent flex items-center gap-3 group">
                        <img src={logo} alt="Moonlight" className="h-auto w-auto" />
                    </Button>
                </div>
 
                {/* Card */}
                <Card className="bg-white/5 border border-white/8 rounded-sm p-8 backdrop-blur-sm">
                    <AuthTabs/>
                    <RegisterForm />
                </Card>
 
              </div>
          </main>
    );
}

export default RegisterPage;
