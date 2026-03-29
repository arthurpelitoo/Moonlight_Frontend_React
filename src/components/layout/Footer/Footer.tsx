import { useEffect, useState } from "react";
import { Button } from "../../common/Button/Button";
import { fetchCategory } from "../../../services/category.service";
import { CategoryCard } from "../../common/CategoryCard/CategoryCard";
import logo from "../../../assets/Moonlight.png";
import { CategoryCardSkeleton } from "../../common/CategoryCard/CategoryCardSkeleton";
import { Carrousel } from "../../common/Carrousel/Carrousel";
import { useBreakpoint } from "../../../hooks/breakpoints/useBreakpoint";
import { FooterSection } from "./FooterSection";
import { legalItems, siteMapItems } from "./FooterSectionData";

export function Footer(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const { isMobile, isTablet } = useBreakpoint();
    const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3; // o ultimo caso é desktop;

    useEffect(() => {
        const start = Date.now();
        fetchCategory().then(data => {
            const gapElapsed = Date.now() - start;
            const minimumTime = 600;
            setTimeout(() => {
                setCategories(data);
                setLoading(false);
            }, Math.max(minimumTime - gapElapsed, 0));
        
        })
    }, []);


    return(
        <footer className="bg-night w-full flex flex-col justify-evenly items-center p-4 pt-12 gap-8">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-20">
                <Button className="w-1/2 flex justify-center" as="link" href="/" variant="primary">
                    <img src={logo} className="h-auto w-auto" alt="Moonlight Logo" />
                </Button>
                <div className="w-1/2 max-w-225 flex flex-col">
                    <h2 className="text-2xl text-center lg:text-left">Todas as Categorias de Jogos:</h2>
                    <Carrousel cardsPerView={cardsPerView}>
                        {loading //está carregando? se sim placeholder carregando
                            ? Array.from({ length: cardsPerView }).map((_, i) => (<CategoryCardSkeleton key={i} />)) 
                            : (categories.map(category => ( //carregou? então componente real
                                <Button as="link" href={"/"+ category.id_category} variant="primary">
                                    <CategoryCard 
                                        key={category.id_category} 
                                        category={category}
                                    />
                                </Button>
                        )))}
                    </Carrousel>
                </div>

            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 px-4 lg:px-20">
                <div className="gap-4 lg:gap-12 flex flex-col text-center lg:text-left lg:justify-center lg:flex-row lg:w-1/2">
                    <FooterSection title="Mapa do Site" items={siteMapItems}/>
                    <div className="w-full h-px lg:w-px lg:h-40 bg-gray-400"></div>
                    <FooterSection title="Juridico" items={legalItems}/>
                </div>
                <div className="flex lg:self-end lg:w-1/2">
                    <h3 className="text-xl text-center w-full lg:text-end">©Moonlight - 2026 Todos os direitos reservados.</h3>
                </div>
            </div>
        </footer>    
    )
}
