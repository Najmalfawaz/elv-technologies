import Hero from '@/components/case-studies/hero';
import CaseStudiesList from '@/components/case-studies/case-studies-list';
import { getCollection } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function CaseStudies() {
  const caseStudies = await getCollection('case-studies');

  return (
    <main>
      <Hero />
      <CaseStudiesList initialData={caseStudies} />
    </main>
  );
}
