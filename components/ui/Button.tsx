type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  onClick,
  href,
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const width = fullWidth ? "w-full" : "";

  const primary =
    "bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-[1.02]";

  const secondary =
    "inline-flex min-h-14 items-center justify-center border border-white/10 text-white hover:border-cyan-500 hover:bg-white/[0.03] hover:text-cyan-300";

  const className = `${base} ${width} ${
    variant === "primary" ? primary : secondary
  }`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
