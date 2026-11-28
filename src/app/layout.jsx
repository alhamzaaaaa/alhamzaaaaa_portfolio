
import { Climate_Crisis, Imperial_Script, Manrope, } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Particles from "@/components/Particles";
import SwarmCursor from "@/components/SwarmCursor";
import "./globals.css";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const climateCrisis = Climate_Crisis({
  variable: "--font-climate-crisis",
  subsets: ["latin"],
  display: "swap",
});
const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const metadata = {
  title: {
    default: "Ameer Hamza Ansari | Full Stack & AI Automation Engineer",
    template: "%s | Ameer Hamza Ansari",
  },
  description: "Portfolio of Ameer Hamza Ansari, a Full Stack Engineer and AI Automation Specialist building web applications and intelligent workflow systems.",
};
export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${climateCrisis.variable} ${imperialScript.variable}`}>
        {/* Global background */}
        <div className="fixed inset-0 z-0 h-screen w-screen">
          <Particles />
        </div>

        {/* Global swarm cursor */}
        <SwarmCursor
          count={450}
          size={2.6}
          shape="dot"
          color="#ddca90"
          accentColor="#ecf0ea"
          spread={85}
          speed={0.50}
          swirl={0.98}
          tail={0.45}
          trail={0.4}
          wander={0.35}
          depth={0.5}
          idle="hide"
          clickEffect="pulse"
          intro
          enabled
          className="swarm-cursor-layer"
          style={{ pointerEvents: "none" }}
        />

        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
