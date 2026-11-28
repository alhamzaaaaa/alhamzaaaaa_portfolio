const sizes = {
    content: "max-w-[var(--container-content)]",
    wide: "max-w-[var(--container-wide)]",
    full: "max-w-none",
};
export default function Container({ children, className = "", size = "content", }) {
    return (<div className={`mx-auto w-full px-[var(--spacing-gutter)] ${sizes[size]} ${className}`}>
            {children}
        </div>);
}
