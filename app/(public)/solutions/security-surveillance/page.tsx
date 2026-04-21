import { solutionsData } from "@/lib/solutions-data";
import SolutionVerticalHero from "@/components/solutions/solution-vertical-hero";
import SolutionVideoHero from "@/components/solutions/solution-video-hero";
import SolutionDetailSection from "@/components/solutions/solution-detail-section";
import { CTASection } from "@/components/partners-clients/cta-section";

export default function SecuritySurveillancePage() {
    const data = solutionsData.securityAndSurveillance;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            

            <SolutionVideoHero
                videoSrc="/images/solutions/security-surveillance/hero.mp4"
                tag="Intelligent Defense"
                title={<>AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Security Systems</span></>}
                description="Protecting your assets with smart, proactive monitoring and real-time behavioral analytics."
            />

            <div className="flex flex-col">
                {data.items.map((item, index) => (
                    <SolutionDetailSection key={item.id} categoryKey="securityAndSurveillance" itemId={item.id} index={index} />
                ))}
            </div>

            <CTASection />
        </main>
    );
}
