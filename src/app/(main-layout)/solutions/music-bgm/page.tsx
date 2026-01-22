'use client'

import AnimatedSection from "@/components/shared/animated-section";

export default function MusicBGMPage() {
  return (
    <main>
      <AnimatedSection className="bg-gray-100 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Music Systems and BGM Solutions for Hospitality in UAE</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Music plays a critical role in shaping guest experience in hotels, restaurants, lounges, and hospitality venues. A well-designed music system and background music (BGM) solution enhances ambience, supports brand identity, and delivers consistent sound quality across all areas without overpowering conversations or disturbing guests.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
                <p className="text-gray-600">ELV Technology Solutions provides professional Music Systems and BGM Solutions in Abu Dhabi, Dubai, and across the UAE, designed specifically for hospitality environments where audio quality, zoning, and control is essential.</p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900">We design and install music and BGM systems for:</h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Hotels and resorts</li>
                    <li>Restaurants, cafés, and food courts</li>
                    <li>Bars, lounges, and night venues</li>
                    <li>Serviced apartments and hospitality towers</li>
                </ul>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900">Our solutions deliver:</h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>sound distribution with no dead zones</li>
                    <li>Independent volume and source control for each area</li>
                    <li>High-quality background music for lobbies, dining areas, and lounges</li>
                    <li>Discreet speakers integrated into interior design</li>
                    <li>Reliable operation for long daily usage</li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
              <img src="/solutions/music-bgm.jpg" alt="Music Systems and BGM Solutions" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
                <img src="/solutions/zoned-music.jpg" alt="Zoned Music & Background Audio Control" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Zoned Music & Background Audio Control</h2>
              <p className="mt-4 text-gray-600">ELV Technology Solutions specializes in multi-zone music and BGM systems, allowing different music sources, playlists, and volume levels in separate areas such as lobbies, restaurants, bars, outdoor terraces, and back-of-house zones.</p>
              <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900">Our systems support:</h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Centralized and zone-based control</li>
                    <li>Integration with streaming services, media players, and automation systems</li>
                    <li>Simple staff operation with secure access levels</li>
                    <li>Expansion for future areas or layout changes</li>
                </ul>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Integrated Music, BGM & Announcement Capability</h2>
              <p className="mt-4 text-gray-600">Where required, music systems and BGM solutions can be seamlessly integrated with public address and emergency announcement systems, ensuring:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    <li>Automatic music attenuation during announcements</li>
                    <li>Clear paging for staff coordination</li>
                    <li>Emergency messaging compliance without compromising daily ambience</li>
                    <li>This integration is optional and applied only where operationally necessary.</li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <img src="/solutions/integrated-music.jpg" alt="Integrated Music, BGM & Announcement Capability" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Professional Installation & Long-Term Reliability</h2>
            <p className="mt-4 text-lg text-gray-700">We provide complete music system and BGM installation in Abu Dhabi and Dubai, including system design, equipment selection, cabling, testing, and commissioning. Every system is engineered for stable performance, ease of use, and future scalability.</p>
            <p className="mt-8 text-lg text-gray-700">Whether you need Music Systems and BGM Solutions in the UAE for a single restaurant or a multi-property hospitality group, ELV Technology Solutions delivers audio environments that support guest comfort, brand consistency, and operational control.</p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
