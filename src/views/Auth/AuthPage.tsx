import { useState } from "react";
import { LoginForm } from "../../components/common/AuthForms/LoginForm";
import { RegisterForm } from "../../components/common/AuthForms/RegisterForm";
import { Button } from "../../components/common/Button/Button";

type AuthMode = "login" | "register";

function AuthPage() {
    const [mode, setMode] = useState<AuthMode>("login");
 
    return (
          <div className="min-h-screen bg-gradient-to-b from-night-soft via-night to-night flex items-center justify-center px-4">
            {/* Fundo decorativo */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-[-20%] right-[-10%] w-150 h-150 rounded-full border border-white/3" />
                  <div className="absolute top-[-10%] right-[-5%] w-100 h-100 rounded-full border border-white/5" />
                  <div className="absolute bottom-[-15%] left-[-10%] w-125 h-125 rounded-full border border-white/3" />
              </div>
 
              <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <a href="/" className="flex items-center gap-3 group">
                        <img src="/src/assets/MoonlightMenor.png" alt="Moonlight" className="h-auto w-auto" />
                    </a>
                </div>
 
                {/* Card */}
                <div className="bg-white/4 border border-white/8 rounded-sm p-8 backdrop-blur-sm">
                    {/* Tab switcher */}
                    <div className="flex mb-4 border-b border-white/10">
                        <Button
                            onClick={() => setMode("login")}
                            className={`flex-1 pb-3 pt-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                                mode === "login"
                                    ? "text-white border-b border-white"
                                    : "text-white/30 hover:text-white/60"
                            }`}
                            style={{ marginBottom: mode === "login" ? "-1px" : "0" }}
                        >
                            Entrar
                        </Button>
                        <Button
                            onClick={() => setMode("register")}
                            className={`flex-1 pb-3 pt-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                                mode === "register"
                                    ? "text-white border-b border-white"
                                    : "text-white/30 hover:text-white/60"
                            }`}
                            style={{ marginBottom: mode === "register" ? "-1px" : "0" }}
                        >
                            Criar conta
                        </Button>
                    </div>
 
                    {/* Forms */}
                    {mode === "login" ? (
                        <LoginForm onSwitch={() => setMode("register")} />
                    ) : (
                        <RegisterForm onSwitch={() => setMode("login")} />
                    )}
                </div>
 
              </div>
          </div>
    );
}

export default AuthPage;
