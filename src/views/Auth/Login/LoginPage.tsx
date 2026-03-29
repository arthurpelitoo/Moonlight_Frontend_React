import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { LoginForm } from "../../../components/common/AuthForms/LoginForm";
import logo from "@/assets/MoonlightIcone.png";


function LoginPage() {
    const navigate = useNavigate();
 
    return (
          <div className="min-h-screen bg-gradient-to-b from-night-soft via-night to-night flex items-center justify-center px-4">
            {/* Fundo decorativo */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-[-20%] right-[-10%] w-150 h-150 rounded-full border border-white/3" />
                  <div className="absolute top-[-10%] right-[-5%] w-100 h-100 rounded-full border border-white/5" />
                  <div className="absolute bottom-[-15%] left-[-10%] w-125 h-125 rounded-full border border-white/3" />
              </div>
 
              <div className="relative w-full max-w-md animate-fade-in">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Button as="link" href="/" className="bg-transparent flex items-center gap-3 group">
                        <img src={logo} alt="Moonlight" className="h-auto w-auto" />
                    </Button>
                </div>
 
                {/* Card */}
                <div className="bg-white/5 border border-white/8 rounded-sm p-8 backdrop-blur-sm">
                    {/* Tab switcher */}
                    <div className="flex mb-4 border-b border-white/10">
                        <Button
                            onClick={() => (navigate("/login"))}
                            className={`flex-1 pb-3 pt-3 text-xs tracking-widest uppercase transition-all duration-300 text-white border-b border-white`}
                            style={{ marginBottom: "-1px" }}
                        >
                            Entrar
                        </Button>
                        <Button
                            onClick={() => (navigate("/register"))}
                            className={`flex-1 pb-3 pt-3 text-xs tracking-widest uppercase transition-all duration-300 text-white/30 hover:text-white/60"
                            }`}
                            style={{ marginBottom: "0" }}
                        >
                            Criar conta
                        </Button>
                    </div>
 
                    <LoginForm/>
                </div>
 
              </div>
          </div>
    );
}

export default LoginPage;
