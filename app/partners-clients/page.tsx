'use client';

import { HeroSection } from '@/components/partners-clients/hero-section';
import { PartnersTabs } from '@/components/partners-clients/partners-tabs';
import { ClientsSlider } from '@/components/partners-clients/clients-slider';
import { CTASection } from '@/components/partners-clients/cta-section';

export default function PartnersAndClientsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-white">
      <main className="isolate">
        <HeroSection />
        <PartnersTabs />
        <ClientsSlider />
        <CTASection />
      </main>
    </div>
  );
}
