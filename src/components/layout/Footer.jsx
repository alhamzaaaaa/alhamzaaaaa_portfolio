import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiGoogleappsscript, } from "@icons-pack/react-simple-icons";
const technologyLogos = [
    { node: <SiReact color="default" size={32}/>, title: "React" },
    { node: <SiNextdotjs color="default" size={32}/>, title: "Next.js" },
    { node: <SiNodedotjs color="default" size={32}/>, title: "Node.js" },
    { node: <SiExpress color="default" size={32}/>, title: "Express" },
    { node: <SiMongodb color="default" size={32}/>, title: "MongoDB" },
    { node: <SiPostgresql color="default" size={32}/>, title: "PostgreSQL" },
    { node: <SiTailwindcss color="default" size={32}/>, title: "Tailwind CSS" },
    {
        node: <SiGoogleappsscript color="default" size={32}/>,
        title: "Google Apps Script",
    },
];
export default function Footer() {
    return (<footer>


            <div className=" mb-2  py-8">
                <LogoLoop logos={technologyLogos} speed={90} direction="left" logoHeight={15} focus={2} gap={82} pauseOnHover hoverSpeed={0} magnify={0.1} fadeOut fadeOutWidth={0.30} scaleOnHover layout="line" draggable scrollBoost={1} intro labels="hover" ariaLabel="Technologies and tools" className="w-full"/>
            </div>

        </footer>);
}
