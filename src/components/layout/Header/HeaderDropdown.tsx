import { useEffect, useRef, useState } from "react";
import { Button } from "../../common/Button/Button";
import { WarmWelcomeTime } from "./WarmWelcomeTime";
import { CaretDownIcon } from "@phosphor-icons/react";
import { getAnimationState } from "../../../utils/ui/animation/animationState";
import { useAuth } from "../../../hooks/auth/useAuth";

export function HeaderDropdown(){
    const [open, setOpen] = useState(false);
    const [confirmLogout, setConfirmLogout] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const animIsOpen = getAnimationState(open);
    const {logout} = useAuth();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if(ref.current && !ref.current.contains(event.target as Node)){
                setOpen(false);
                setConfirmLogout(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        <div ref={ref} className="relative lg:w-fit w-full">
            <Button 
                className="max-lg:active:bg-blue-600 max-lg:active:scale-95 max-lg:hover:translate-y-0 lg:rounded-md lg:p-2 lg:w-fit flex w-full transition-all duration-300 lg:hover:bg-blue-600 justify-center items-center" 
                as="button" 
                onClick={() => setOpen(!open)} 
                variant="cta"
            >
                <WarmWelcomeTime/>
                <CaretDownIcon size={32} weight="thin" className={`transition-transform duration-300 ${animIsOpen.styles.rotate180}`} />
            </Button>

            {open && (
                !confirmLogout 
                ?(
                    <div className="bg-night z-11 absolute top-full mt-2 rounded-md border-4 border-white/25 lg:block lg:w-full flex flex-col max-lg:w-fit max-lg:justify-self-center transition-all duration-300 justify-center items-center">
                        <Button as="link" variant="primary" href="/profile" className={`rounded-t-md max-lg:active:bg-white max-lg:active:text-night lg:hover:bg-white lg:hover:text-night transition-all duration-300 w-full block px-4 py-2 text-sm`}>Perfil</Button>
                        <Button as="link" variant="primary" href="/orders" className={`max-lg:active:bg-white max-lg:active:text-night lg:hover:bg-white lg:hover:text-night transition-all duration-300 w-full block px-4 py-2 text-sm`}>Pedidos</Button>
                        <Button as="button" onClick={() => setConfirmLogout(true)} variant="primary" className={`rounded-b-md max-lg:active:bg-white max-lg:active:text-night lg:hover:bg-white lg:hover:text-night transition-all duration-300 w-full block px-4 py-2 text-sm`}> 
                            Sair
                        </Button>
                    </div>  
                )
                :(  
                    <div className="bg-night z-11 p-4 absolute top-full mt-2 rounded-md border-4 border-white/25 lg:block lg:w-full flex flex-col max-lg:w-45 max-lg:justify-self-center transition-all duration-300 justify-center items-center">
                        <p className="text-white">Tem certeza?</p>
                        <div className="flex justify-evenly gap-2">
                            <Button className="rounded-md border p-2 border-white/25" onClick={logout}>Sim</Button>
                            <Button className="rounded-md border p-2 border-white/25" onClick={() => setConfirmLogout(false)}>Não</Button>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}