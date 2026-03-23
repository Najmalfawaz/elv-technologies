import { solutionsData } from "@/lib/solutions-data";
import SolutionVerticalHero from "@/components/solutions/solution-vertical-hero";
import SolutionVideoHero from "@/components/solutions/solution-video-hero";
import SolutionDetailSection from "@/components/solutions/solution-detail-section";
import { CTASection } from "@/components/partners-clients/cta-section";

export default function AudioVisualPage() {
    const data = solutionsData.audioVisual;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <SolutionVerticalHero
                title={data.title}
                description={data.description}
                bgImage={data.image}
            />

            <SolutionVideoHero
                videoSrc="/images/solutions/audio-visual/hero.mp4"
                tag="Immersive Experience"
                title={<>Your Vision, Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">A/V Reality</span></>}
                description="Next-generation audio-visual systems tailored for seamless collaboration and exceptional quality."
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
