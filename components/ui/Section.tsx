import { ReactNode } from "react";

import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer";
};

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`section ${className}`}>
      <Container>{children}</Container>
    </Tag>
  );
}
