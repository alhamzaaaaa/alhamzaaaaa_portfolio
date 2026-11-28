"use client";
import Container from "@/components/ui/Container";
import GlassSurface from "@/components/GlassSurface";
import JellyRadio from "@/components/JellyRadio";
import { useState } from "react";
import { House, UserRound, Code2, BriefcaseBusiness, FolderKanban, Mail, } from "lucide-react";
import { navigationItems } from "@/data/navigation";
export default function Navbar() {
    const [activeHref, setActiveHref] = useState("#home");
    const handleNavigation = (href) => {
        setActiveHref(href);
        document
            .getElementById(href.replace("#", ""))
            ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    const navigationIcons = {
        "#home": <House size={16}/>,
        "#about": <UserRound size={16}/>,
        "#skills": <Code2 size={16}/>,
        "#experience": <BriefcaseBusiness size={16}/>,
        "#projects": <FolderKanban size={16}/>,
        "#contact": <Mail size={16}/>,
    };
    return (<header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 sm:top-4 sm:w-[calc(100%-2rem)]">
            <Container size="wide">
                <GlassSurface width="100%" height={58} borderRadius={40} borderWidth={0.07} brightness={60} opacity={0.96} blur={2} displace={5} backgroundOpacity={0.05} saturation={1.5} distortionScale={-180} redOffset={0} greenOffset={10} blueOffset={20} refraction renderer="auto" className="w-full">
                    <nav aria-label="Main navigation" className="flex h-full w-full items-center justify-center overflow-hidden px-10 sm:px-2">
                        <JellyRadio className="min-w-0 max-w-full overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" items={navigationItems.map((item) => ({
            value: item.href,
            label: item.label,
            icon: navigationIcons[item.href],
        }))} value={activeHref} onChange={handleNavigation} size="sm" gap={6} radius={12} swell={0.10} barge={10} jelly={1.5} bounce={0.5} stagger={0.04} stiffness={360} chipColor="transparent" activeColor="var(--color-primary)" textColor="var(--color-foreground)" activeTextColor="#ffffff" ariaLabel="Portfolio sections"/>
                    </nav>
                </GlassSurface>
            </Container>
        </header>);
}
