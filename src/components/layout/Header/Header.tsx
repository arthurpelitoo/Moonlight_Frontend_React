// import "../../css/components/AllPagesUsage/Header.css"

import { MagnifyingGlassIcon, ShoppingCartSimpleIcon, UserIcon } from "@phosphor-icons/react";
import { Button } from "../../common/Button/Button";

function Header(){
    return(
        <header className="bg-night w-full flex justify-evenly items-center">

                <Button as="a" href="/" variant="primary">
                    <img src="/src/assets/MoonlightMenor.png" className="h-auto w-auto" alt="Moonlight Logo" />
                </Button>
                <nav className="flex gap-6.25">
                    <Button as="a" href="/" variant="primary">Home</Button>
                    <Button as="a" href="/store" variant="primary">Loja</Button>
                    <Button as="a" href="/category" variant="primary">Categorias</Button>
                    <Button as="a" href="/news" variant="primary">Novidades</Button>
                </nav>
                <div className="flex gap-6.25">
                    <Button as="a" href="/" variant="primary" icon={<MagnifyingGlassIcon size={32} weight="thin" />}></Button>
                    <Button as="a" href="/" variant="primary" icon={<ShoppingCartSimpleIcon size={32} weight="thin" />}></Button>
                    <Button as="a" href="/" variant="primary" icon={<UserIcon size={32} weight="thin" />}></Button>
                </div>

        </header>    
    )
}

export default Header;