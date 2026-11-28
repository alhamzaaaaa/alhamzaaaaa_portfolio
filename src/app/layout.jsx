
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
        <SwarmCursor
          count={450}
          size={3.8}
          shape="dot"
          color="#ddca90"
          accentColor="#ecf0ea"
          spread={90}
          speed={2}
          swirl={0.28}
          tail={0.45}
          trail={2}
          wander={3}
          depth={0.5}
          idle="roam"
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
