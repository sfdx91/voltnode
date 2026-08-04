import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        sm:p-8
        transition-all
        duration-300
        ${
          hover
            ? "ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_16px_40px_rgba(34,211,238,.12)]"
            : ""
        }
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] via-transparent to-cyan-400/[0.03]" />
      <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
