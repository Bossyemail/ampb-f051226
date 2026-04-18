import * as React from "react";
import { Container } from "./Container";

type Tone = "default" | "tight";

export function Section({
  id,
  tone = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const py =
    tone === "tight"
      ? "py-12 sm:py-14 lg:py-16"
      : "py-16 sm:py-20 lg:py-24";

  return (
    <section id={id} className={`bg-black ${py} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
