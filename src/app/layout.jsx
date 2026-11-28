
import { Climate_Crisis, Imperial_Script, Manrope, } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Particles from "@/components/Particles";
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
      <body
        className={`${manrope.variable} ${climateCrisis.variable} ${imperialScript.variable}`}
      >
        <div className="fixed inset-0 z-0 h-screen w-screen">
          <Particles />
        </div>
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
