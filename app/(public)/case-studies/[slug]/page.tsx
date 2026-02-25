import CaseStudySlugPage from "@/components/case-studies/case-study-slug-page";
import { getCollection } from "@/lib/db";
import { notFound } from "next/navigation";

import { CaseStudy } from "@prisma/client";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudies = await getCollection('case-studies') as CaseStudy[];
  const index = caseStudies.findIndex((c: any) => c.slug === params.slug);
  const study = caseStudies[index];

  if (!study) {
    notFound();
  }

  const prevStudy = index > 0 ? caseStudies[index - 1] : undefined;
  const nextStudy = index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  return <CaseStudySlugPage study={study as any} prevStudy={prevStudy as any} nextStudy={nextStudy as any} />;
}
