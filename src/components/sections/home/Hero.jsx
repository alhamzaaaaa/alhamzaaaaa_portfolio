
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

                <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                    <a
                        href="/projects"
                        className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm sm:px-7"
                    >
                        Explore My Work
                    </a>

                    <a
                        href="/contact"
                        className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm sm:px-7"
                    >
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </section>
    );
}
