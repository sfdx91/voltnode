import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
};

export default function Grid({
  children,
  cols = 3,
  className = "",
}: GridProps) {
  const columns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div className={`grid auto-rows-fr gap-6 lg:gap-8 ${columns[cols]} ${className}`}>
      {children}
    </div>
  );
}
