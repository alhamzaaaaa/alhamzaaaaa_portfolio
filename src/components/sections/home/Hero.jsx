import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen flex-col justify-center px-4 pt-24 sm:px-6 sm:pt-20 lg:px-8"
        >
            <div className="mx-auto flex min-h-[0vh] w-full max-w-7xl flex-col justify-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-1000">

                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.22em]">
                    Full Stack Developer | AI Automation Engineer
                </p>

                <h1 className="font-display max-w-4xl break-words text-[clamp(2.5rem,8vw,6rem)] leading-[1.15] tracking-[-0.035em] lg:text-10xl">
                    Ameer Hamza Ansari
                </h1>

                <p className="mt-4 font-script text-3xl text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                    2+ Years of Experience
                </p>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:mt-8 sm:text-base sm:leading-8 sm:text-lg">
                    I build web applications and intelligent workflow automations that
                    make complex work simpler, clearer, and more reliable.
                </p>

                <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                    <a
                        href="https://linkedin.com/in/ameer-hamza-ansari-6260912b7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-10 sm:min-h-12 items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.13] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                    >
                        <FaLinkedinIn className="size-4 sm:size-[18px] transition-transform duration-300 group-hover:scale-110" />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/alhamzaaaaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-h-10 sm:min-h-12 items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.13] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                    >
                        <FaGithub className="size-4 sm:size-[18px] transition-transform duration-300 group-hover:scale-110" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
