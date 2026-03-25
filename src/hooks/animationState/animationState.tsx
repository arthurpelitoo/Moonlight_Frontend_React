
export function useAnimationState(isActive: boolean){
    return{
        styles: {
            rotate45_0: isActive ? "rotate-45" : "rotate-0",
            rotate90_0: isActive ? "rotate-90" : "rotate-0",
            rotate0_90: isActive ? "rotate-0" : "rotate-90",
            slideDownY0_Y4: isActive ? "translate-y-0" : "-translate-y-4",
            fadeOpacity100_0: isActive ? "opacity-100" : "opacity-0",
            fadeOpacity0_100: isActive ? "opacity-0" : "opacity-100",
            scale100_75: isActive ? "scale-100" : "scale-75",
            scale75_100: isActive ? "scale-75" : "scale-100",
            pointer: isActive ? "pointer-events-auto" : "pointer-events-none"
        }
    };
}