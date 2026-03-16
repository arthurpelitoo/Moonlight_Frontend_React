// import "../../css/components/AllPagesUsage/Header.css"

import { Button } from "../../common/Button/Button";

function Footer(){
    return(
        <footer className="bg-night w-full flex justify-evenly items-center">
            <div className="w-full">
                <Button as="a" href="/" variant="primary">
                    <img src="/src/assets/MoonlightMenor.png" className="h-auto w-auto" alt="Moonlight Logo" />
                </Button>
                <div>
                    
                </div>

            </div>
            <div></div>
        </footer>    
    )
}

export default Footer;