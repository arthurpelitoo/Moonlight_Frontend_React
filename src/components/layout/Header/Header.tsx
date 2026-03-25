import { ListIcon, MagnifyingGlassIcon, ShoppingCartSimpleIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "../../common/Button/Button";
import { useState } from "react";
import { useBreakpoint } from "../../../hooks/breakpoints/breakpointHook";
import { SearchInputBarCompact } from "./SearchInputBarCompact";
import { SearchInputBarHeader } from "./SearchInputBarHeader";
import { useAnimationState } from "../../../hooks/animationState/animationState";

export function Header(){
    const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false); //como está false, ao fazer !hamburguerisOpen é true.
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const {isMobile, isTablet} = useBreakpoint();
    const animIsSearchClicked = useAnimationState(searchIsClicked);
    const animIsHamburguerOpen = useAnimationState(hamburguerIsOpen);

    /* o header é 120px */

    // const stringCenterEffect = "relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

    return(
        <header className="fixed top-0 left-0 relative bg-night w-full flex z-11">

                <Button className="justify-items-center w-1/2 pl-5 lg:pl-0 lg:w-1/3" as="link" href="/" variant="primary">
                    <img src="/src/assets/MoonlightMenor.png" className="h-auto w-auto" alt="Moonlight Logo" />
                </Button>

                <Button 
                    className="w-1/2 justify-items-end pr-5 lg:hidden"
                    onClick={() => setHamburguerIsOpen(!hamburguerIsOpen)}
                >
                    <div className="relative w-7 h-7">
                        <ListIcon
                            size={28}
                            className={`
                            absolute transition-all duration-300
                            ${animIsHamburguerOpen.styles.fadeOpacity0_100} ${animIsHamburguerOpen.styles.rotate90_0} ${animIsHamburguerOpen.styles.scale75_100}
                            `}
                        />

                        <XIcon
                            size={28}
                            className={`
                            absolute transition-all duration-300
                            ${animIsHamburguerOpen.styles.fadeOpacity100_0} ${animIsHamburguerOpen.styles.rotate0_90} ${animIsHamburguerOpen.styles.scale100_75}
                            `}
                        />
                    </div>
                </Button> 

                <nav className={`${hamburguerIsOpen && isTablet || hamburguerIsOpen && isMobile ? "block" : "hidden"} bg-night absolute top-full left-0 w-full
           flex-col items-center lg:flex lg:w-2/3 lg:bg-transparent lg:static lg:flex-row`}>
                    <div className="flex w-full justify-center flex-col text-center lg:flex-row lg:static lg:w-1/2 lg:gap-6.25">
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 duration-300 transition-all hover:bg-transparent fx-underline" as="link" href="/" variant="primary">Home</Button>
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 duration-300 transition-all hover:bg-transparent fx-underline" as="link" href="/offers" variant="primary">Ofertas</Button>
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 duration-300 transition-all hover:bg-transparent fx-underline" as="link" href="/category" variant="primary">Categorias</Button>
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 duration-300 transition-all hover:bg-transparent fx-underline" as="link" href="/news" variant="primary">Novidades</Button>
                    </div>
                    <div className="flex w-full flex-col justify-center text-center items-center lg:flex-row lg:static lg:w-1/2 lg:gap-6.25 ">
                        {isTablet || isMobile 
                            ? "" 
                            : <Button 
                                className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 max-lg-hover:translate-y-0 transition-all duration-300 hover:-translate-y-2"
                                onClick={() => setSearchIsClicked(!searchIsClicked)} 
                                variant="primary" 
                                icon={<MagnifyingGlassIcon size={32} weight={searchIsClicked ? "fill" : "thin"} className={`transition-transform duration-600 ${animIsSearchClicked.styles.rotate45_0}`} />}>
                              </Button>
                        }
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 max-lg:hover:translate-y-0 lg:block lg:w-fit w-full transition-all duration-300 hover:-translate-y-2 flex justify-center gap-1.5 items-center flex-row" as="link" href="/" variant="primary" icon={<ShoppingCartSimpleIcon size={32} weight="thin" />}>{isTablet || isMobile ? "Carrinho" : ""}</Button>
                        <Button className="max-lg:active:bg-white max-lg:active:text-night max-lg:active:scale-95 max-lg:hover:translate-y-0 lg:block lg:w-fit w-full transition-all duration-300 hover:-translate-y-2 flex justify-center gap-1.5 items-center flex-row" as="link" href="/auth" variant="primary" icon={<UserIcon size={32} weight="thin" />}>{isTablet || isMobile ? "Usuario" : ""}</Button>
                        {isTablet || isMobile ? <SearchInputBarCompact/> : ""} 
                        {/* componente novo acima */}
                    </div>
                </nav>

                <div 
                    className={
                        `bg-night-soft absolute flex gap-5 justify-center left-0 top-30 p-8 w-full z-11 transition-all duration-300 ease-out
                        ${animIsSearchClicked.styles.fadeOpacity100_0} ${animIsSearchClicked.styles.slideDownY0_Y4} ${animIsSearchClicked.styles.pointer}`
                    }>
                    <Button className="bg-transparent" as="button" onClick={() => setSearchIsClicked(!searchIsClicked)} variant="primary" icon={<XIcon size={32} weight="thin" />}></Button>
                    <SearchInputBarHeader/>
                </div>

        </header>    
    )
}