import { solutionsData } from "@/lib/solutions-data";
import SolutionVerticalHero from "@/components/solutions/solution-vertical-hero";
import SolutionDetailSection from "@/components/solutions/solution-detail-section";
import { CTASection } from "@/components/partners-clients/cta-section";

export default function AudioVisualPage() {
    const data = solutionsData.audioVisual;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SolutionVerticalHero
                title={data.title}
                description={data.description}
            />

            <div className="flex flex-col">
                {data.items.map((item, index) => (
                    <SolutionDetailSection key={item.id} categoryKey="audioVisual" itemId={item.id} index={index} />
                ))}
            </div>

            <CTASection />
        </main>
    );
}
