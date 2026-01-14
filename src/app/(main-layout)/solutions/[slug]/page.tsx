
'use client';

import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";

export default function SolutionPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const solution = solutions.find(
    (s) => s.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!solution) {
    notFound();
  }

  const SolutionComponent = solution.component;

  return (
    <main>
      <SolutionComponent />
    </main>
  );
}
