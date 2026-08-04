import { ReactNode } from "react";

type SectionTitleProps = {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  const alignment = center ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`section-heading mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
