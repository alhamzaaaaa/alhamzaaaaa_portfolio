export default function Hero() {
    return (<section id="home" className="flex min-h-screen flex-col justify-center ">
            <div className="mx-auto flex min-h-[0vh] max-w-7xl flex-col justify-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-1000">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Full Stack Developer | AI Automation Engineer
                </p>

                <h1 className="font-display max-w-4xl text-[clamp(2.5rem,5.5vw,6rem)] leading-[1.15] tracking-[-0.035em] lg:text-10xl">
                    Ameer Hamza Ansari
                </h1>
                <p className="mt-4 font-script text-4xl text-[var(--color-primary)] sm:text-5xl">
                    2+ Years of Experience
                </p>
                <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                    I build web applications and intelligent workflow automations that
                    make complex work simpler, clearer, and more reliable.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a href="#projects" className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105">
                        Explore My Work
                    </a>

                    <a href="#contact" className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                        Let&apos;s Connect
                    </a>
                </div>

            </div>

        </section>);
}
