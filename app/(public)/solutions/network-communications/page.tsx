import { solutionsData } from "@/lib/solutions-data";
import SolutionVerticalHero from "@/components/solutions/solution-vertical-hero";
import SolutionDetailSection from "@/components/solutions/solution-detail-section";
import { CTASection } from "@/components/partners-clients/cta-section";

export default function NetworkCommunicationsPage() {
    const data = solutionsData.networkAndCommunications;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SolutionVerticalHero
                title={data.title}
                description={data.description}
                bgImage={data.image}
            />

            {/* Intro text specific to this section */}
            {data.intro && (
                <section className="py-16 bg-white dark:bg-slate-900">
                    <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-lg prose-slate dark:prose-invert text-center">
                        {data.intro.slice(0, 2).map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </section>
            )}

            <div className="flex flex-col">
                {data.items.map((item, index) => (
                    <SolutionDetailSection key={item.id} categoryKey="networkAndCommunications" itemId={item.id} index={index} />
                ))}
            </div>

            <CTASection />
        </main>
    );
}
