import CaseStudySlugPage from "@/components/case-studies/case-study-slug-page";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudySlugPage slug={params.slug} />;
}
