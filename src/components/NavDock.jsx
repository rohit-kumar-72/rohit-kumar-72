import React, { useEffect, useRef, useState } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { BriefcaseBusiness, FileUser, FolderKanban, HomeIcon, Moon, Sun, Wrench } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import gsap from "gsap";
import { Separator } from "./ui/separator";
import { useTheme } from "./theme-provider";

export function NavDock() {
    const iconLabels = useRef([]);
    const { theme, setTheme } = useTheme();
    const [magnification, setMagnification] = useState(40)
    // Function to animate the tooltip content
    const handleMouseEnter = (index) => {
        gsap.from(iconLabels.current[index],
            { y: -10, duration: 0.3, delay: -1 }
        );
    };

    const handleMouseLeave = (index) => {
        gsap.to(iconLabels.current[index], { y: -10, duration: 0.3 });
    };

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            return
        }
        setTheme("light")
    }

    useEffect(() => {
        // console.log(theme)
        const updateMagnification = () => {
            setMagnification(window.innerWidth >= 1024 ? 55 : 40); // Magnify only on large screens
        };

        updateMagnification();
        window.addEventListener("resize", updateMagnification);

        return () => window.removeEventListener("resize", updateMagnification);
    }, []);

    return (
        <div className="relative overflow-hidden font-body">
            <TooltipProvider>
                <Dock magnification={magnification} distance={100} className="max-w-[90%] bg-[rgba(255,255,255,0.03)]">

                    {/* navlink */}
                    {DATA.navbar.map((item, index) => (
                        <DockIcon key={item.label} className="hover:bg-black/10 hover:dark:bg-white/10 max-sm:p-2 p-3"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={item.href}
                                        aria-label={item.label}
                                        className="z-10"
                                    >
                                        <item.icon className="size-full" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    ref={(el) => (iconLabels.current[index] = el)}
                                    className="max-md:hidden dark:bg-white text-xs px-2 py-1 mb-2 -z-10 rounded-md bg-black dark:text-black text-white"
                                >
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-full" />

                    {/* resume link */}
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10 max-sm:p-2 p-3"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={DATA.resume.url}
                                    aria-label={DATA.resume.name}
                                    className="z-10"
                                >
                                    <DATA.resume.icon className="size-full" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent
                                ref={(el) => (iconLabels.current[(Object.values(DATA.navbar)).length] = el)}
                                className="max-md:hidden dark:bg-white text-xs px-2 py-1 mb-2 -z-10 rounded-md bg-black dark:text-black text-white"
                            >
                                {DATA.resume.name}
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <Separator orientation="vertical" className="h-full" />

                    {/* theme mode button */}
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10 max-sm:p-2 p-3"
                        onClick={changeTheme}
                    >
                        {
                            theme == "dark"
                                ? <Sun className="size-full"
                                />
                                : <Moon className="size-full"
                                />
                        }
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div >
    );
}

const Icons = {
    resume: (props) => <FileUser {...props} />,
};

const DATA = {
    navbar: [
        { href: "#hero", icon: HomeIcon, label: "Home" },
        { href: "#projects", icon: FolderKanban, label: "Projects" },
        { href: "#tools", icon: Wrench, label: "Tech Stack" },
        { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    ],
    resume: {
        name: "Resume",
        url: "#resume",
        icon: Icons.resume,
    }
}
