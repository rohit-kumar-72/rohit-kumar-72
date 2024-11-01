import { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import { useTheme } from "../theme-provider";

export function ShowParticles() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
        />
    );
}
