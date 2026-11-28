const variants = {
    primary: `
    border-[var(--color-primary)]/30
    bg-[var(--color-primary)]/20
    text-[var(--color-foreground)]
    hover:bg-[var(--color-primary)]/30
  `,
    secondary: `
    border-[var(--color-secondary)]/30
    bg-[var(--color-secondary)]/15
    text-[var(--color-foreground)]
    hover:bg-[var(--color-secondary)]/25
  `,
    outline: `
    border-[var(--color-border)]
    bg-white/5
    text-[var(--color-foreground)]
    hover:bg-white/15
  `,
};
export default function Button({ children, variant = "primary", className = "", type = "button", ...props }) {
    return (<button type={type} className={`
        group relative isolate inline-flex items-center justify-center
        gap-2 overflow-hidden rounded-full
        border px-6 py-3
        text-sm font-semibold tracking-wide
        backdrop-blur-xl backdrop-saturate-150
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(0,0,0,0.08)]
        transition-all duration-[var(--duration-normal)]
        ease-[var(--ease-smooth)]
        hover:-translate-y-0.5
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_30px_rgba(0,0,0,0.12)]
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[var(--color-primary)]
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${className}
      `} {...props}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-b from-white/25 via-white/5 to-transparent opacity-80"/>

      <span aria-hidden="true" className="pointer-events-none absolute -inset-full -z-10 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"/>

      <span className="relative z-10">{children}</span>
    </button>);
}
