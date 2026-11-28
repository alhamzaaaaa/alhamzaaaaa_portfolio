export default function SectionHeading({ eyebrow, title, description, align = "left", className = "", }) {
    return (<div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
            {eyebrow && (<span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {eyebrow}
                </span>)}

            <h2 className="font-display text-display leading-tight text-[var(--color-foreground)]">
                {title}
            </h2>

            {description && (<p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                    {description}
                </p>)}
        </div>);
}
