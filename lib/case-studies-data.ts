export type CaseStudy = {
  slug: string;
  client: string;
  project: string;
  location: string;
  category?: string;
  overview: string;
  challenges?: string[];
  solution: {
    title: string;
    components?: { name: string; details: string; }[];
    points?: string[];
  };
  outcomes: string[];
  image: string;
  gallery: string[];
};

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "guest-house-building-at-zones-corp",
    client: "Abu Dhabi Ports Company (PJSC)",
    project: "Refurbishment of Guest House Building",
    location: "ICAD-1, Musaffah, Abu Dhabi, UAE",
    overview: "ETS delivered a comprehensive modernization of the Guest House Building for Abu Dhabi Ports Company. The engagement encompassed Audio-Visual (AV) systems, Access Control, Structured Cabling, Student Entry/Exit Barriers, and Network Active Components—integrated to enhance operational efficiency, security, and the overall user experience.",
    challenges: [
      "Converged multi-system integration without disrupting day-to-day operations.",
      "High-definition presentation and video-conferencing requirements across boardroom and auditorium spaces.",
      "Secure yet frictionless access for staff and visitors, with centralized oversight.",
      "Future-ready structured cabling to support current and anticipated bandwidth needs.",
      "Efficient student movement management through automated barriers tied to access control.",
      "Optimized, continuously monitored network performance.",
    ],
    solution: {
      title: "Engineered and Implemented Solution",
      components: [
        {
          name: "Audio-Visual Systems",
          details: "Board Room: Interactive presentation, conferencing microphones, premium loudspeakers, and smart displays for executive meetings. Auditorium: High-definition projection, distributed audio, and video-conferencing capability to support events, seminars, and briefings.",
        },
        {
          name: "Access Control",
          details: "Biometric readers and RFID credentials for secure, role-based entry. Turnstiles at controlled points with centralized monitoring for staff and visitor movements.",
        },
        {
          name: "Structured Cabling",
          details: "End-to-end Cat6A and fiber-optic backbone for high-speed data and voice. Centralized data hub and patching architecture enabling scalability and simplified management.",
        },
        {
          name: "Student Entry/Exit Barrier System",
          details: "RFID-enabled barriers and automated turnstiles to streamline movement while maintaining security. Real-time activity tracking integrated with access control.",
        },
        {
          name: "Network Active Components",
          details: "Enterprise-grade routers, switches, and firewalls for secure, resilient connectivity. Network monitoring and management tools for proactive performance optimization.",
        },
      ]
    },
    outcomes: [
      "Enhanced communication and collaboration across executive and public spaces.",
      "Elevated safety and compliance through centralized access management.",
      "A future-ready, standards-based cabling and network foundation.",
      "Seamless student and visitor flow with full auditability.",
      "High-performance, secure networking with real-time observability.",
    ],
    image: "/images/case-studies/case-1/1.jpg",
    gallery: [
      "/images/case-studies/case-1/1.jpg",
      "/images/case-studies/case-1/2.jpg",
      "/images/case-studies/case-1/3.jpg",
    ]
  },
  {
    slug: "cctv-system-for-bus-shelters-abu-dhabi",
    client: "Abu Dhabi Department of Transport (DoT)",
    project: "CCTV System Installation for 200+ Shelters",
    location: "Abu Dhabi City, Al Dhafra Region, and Al Ain",
    overview: "In line with the DoT’s public-transport enhancement programme, ETS deployed a robust CCTV platform across more than 200 air-conditioned bus shelters. The system strengthens passenger safety, deters vandalism, and enables real-time incident response via centralized oversight.",
    challenges: [
      "Harsh-weather durability across distributed outdoor sites.",
      "End-to-end coverage with reliable image quality day and night.",
      "Secure remote monitoring and streamlined incident management.",
    ],
    solution: {
      title: "Solution Highlights",
      points: [
        "High-definition fixed and specialty cameras to ensure comprehensive visual coverage.",
        "Weather-resistant housings and components engineered for Abu Dhabi’s climate.",
        "Centralized remote monitoring for real-time visibility and rapid response.",
        "Scalable architecture to accommodate future shelter expansions.",
      ]
    },
    outcomes: [
      "24/7 surveillance across 200+ shelters with consistent image fidelity.",
      "Improved public-space safety and asset protection.",
      "On-time delivery and full client satisfaction.",
    ],
    image: "/images/case-studies/case-2/1.jpg",
    gallery: [
      "/images/case-studies/case-2/1.jpg",
      "/images/case-studies/case-2/2.jpg",
    ]
  },
  {
    slug: "radisson-blu-hotel-abu-dhabi-corniche-av",
    client: "Radisson Blu Hotel & Resort, Abu Dhabi Corniche",
    project: "Outdoor Sound System and LED Screen",
    location: "Abu Dhabi Corniche, UAE",
    overview: "Positioned along the Abu Dhabi Corniche, the resort sought to elevate its beachfront and poolside experiences with a premium audio solution and a high-brightness outdoor LED display. ETS designed and delivered an integrated system that blends discreet aesthetics with concert-grade performance.",
    challenges: [
      "High-fidelity sound in open-air environments subject to wind and ambient noise.",
      "Weather-resistant hardware capable of sustained outdoor operation.",
      "LED visibility under direct sunlight with seamless AV integration.",
    ],
    solution: {
      title: "Solution Highlights",
      points: [
        "Landscape and architectural loudspeakers for uniform coverage across gardens, pool, and beach areas.",
        "Weather-treated 12-inch woofers with 1.4-inch compression drivers for the beach restaurant.",
        "Scalable, professional-grade amplifiers and system processing for dynamic content.",
        "4-channel digital DJ mixer with USB and a professional media player to support live events.",
        "High-resolution outdoor LED screen at West Bay, engineered for daylight legibility and weather resistance.",
      ]
    },
    outcomes: [
      "Immersive, crystal-clear audio for background ambience and live performances.",
      "Compelling visual impact for events, promotions, and live broadcasts.",
      "A cohesive guest experience across beach, pool, and gym zones.",
    ],
    image: "/images/case-studies/case-3/1.jpg",
    gallery: [
      "/images/case-studies/case-3/1.jpg",
      "/images/case-studies/case-3/2.jpg",
      "/images/case-studies/case-3/3.jpg",
    ]
  },
  {
    slug: "al-ain-and-abu-dhabi-coop-cctv",
    client: "Al Ain Cooperative Society & Abu Dhabi Cooperative Society",
    project: "CCTV System Installation and Annual Maintenance Contracts (AMC)",
    location: "45+ branches across Al Ain, Abu Dhabi, and surrounding regions",
    overview: "ETS partnered with two of the UAE’s leading cooperative retailers to standardize and elevate security across a large multi-site footprint. The programme included new CCTV installations, systems integration, and comprehensive AMC to guarantee long-term reliability.",
    challenges: [
      "Consistent coverage across diverse store formats, warehouses, and parking lots.",
      "Seamless integration with existing infrastructure and security workflows.",
      "Sustained performance through proactive, SLA-driven maintenance.",
    ],
    solution: {
      title: "Solution Highlights",
      points: [
        "Branch-specific CCTV designs featuring high-definition IP cameras (dome, bullet, and PTZ).",
        "Network Video Recorders (NVRs) sized for retention policies and analytics.",
        "Standards-based installation and commissioning with centralized monitoring enablement.",
        "AMC services: scheduled health checks, firmware updates, camera calibration, storage optimization, and rapid incident response.",
      ]
    },
    outcomes: [
      "Uniform surveillance posture across 45+ locations with full coverage of entrances, exits, storage rooms, and parking.",
      "Reduced downtime and predictable performance through AMC.",
      "Mobile and desktop remote access for security and management teams.",
    ],
    image: "/images/case-studies/case -4/1.jpg",
    gallery: [
      "/images/case-studies/case -4/1.jpg",
      "/images/case-studies/case -4/2.jpg",
      "/images/case-studies/case -4/3.jpg",
    ]
  },
  {
    slug: "sofitel-dubai-jumeirah-beach-av-upgrade",
    client: "Sofitel Dubai Jumeirah Beach",
    project: "Centralized BGM; Ballroom and Meeting Room AV Upgrade",
    location: "The Walk — Jumeirah Beach Residence — Dubai",
    overview: "To uphold Sofitel’s luxury standards, ETS upgraded the hotel’s background music (BGM) platform and modernized AV systems in the ballroom and meeting rooms, ensuring refined aesthetics, intuitive control, and future scalability.",
    challenges: [
      "Integration with existing infrastructure while enabling growth.",
      "Diverse acoustic and operational needs across poolside, meeting rooms (Antibes, Mentone, Cannes), and the ballroom.",
      "Discreet, luxury-grade presentation with uncompromised performance.",
    ],
    solution: {
      title: "Solution Highlights",
      components: [
        { name: "Centralized BGM Rack", details: "PC, professional soundcard, audio DSP, amplifiers, network switch, Dante module, and VC panel within a neatly organized rack. Power management with sequential switching and custom panels for serviceability." },
        { name: "Poolside A/V Rack", details: "Ceiling speakers with a dedicated control rack (PC, soundcard, DSP, amplifier, network switch, VC panel). Dante panel integration and DSP programming for optimal tuning." },
        { name: "Meeting Rooms (Antibes, Mentone, Cannes)", details: "High-quality projection and audio systems tailored to presentation needs. Cannes room enhancements with upgraded microphones and integrated audio." },
        { name: "Ballroom AV", details: "High-performance projector with wide-throw #2 zoom lens and motorized screen. Amplifiers and microphones to deliver intelligible, powerful audio." }
      ]
    },
    outcomes: [
      "A luxury-calibrated AV environment that is intuitive for staff and impressive for guests.",
      "Centrally managed BGM with room-level nuance and control.",
      "Scalable, serviceable architecture aligned with future event needs."
    ],
    image: "/images/case-studies/case-5/1.jpg",
    gallery: [
      "/images/case-studies/case-5/1.jpg",
      "/images/case-studies/case-5/2.jpg",
      "/images/case-studies/case-5/3.jpg",
      "/images/case-studies/case-5/4.jpg",
    ]
  },
  {
    slug: "le-meridien-hotel-abu-dhabi-av-upgrade",
    client: "Le Meridien Hotel Abu Dhabi",
    project: "Sound System Upgrade & Outdoor LED Installation",
    location: "Al Zahiyah — E14 — Abu Dhabi",
    overview: "Le Meridien engaged ETS to transform its audio-visual footprint across signature venues and outdoor spaces, complemented by a high-resolution LED screen for promotions and live content.",
    solution: {
      title: "Solution by Venue",
      components: [
        { name: "NRG Restaurant (Indoor)", details: "Wall-mount 10-inch speakers with precision brackets for uniform coverage. High-performance subwoofer for rich low-frequency extension. Amplifier, Digital Signal Processor (DSP), and media player for granular control." },
        { name: "Outdoor Restaurant", details: "Weather-resistant wall-mount 10-inch speakers and amplifiers for even distribution. Garden speakers to complement landscape aesthetics." },
        { name: "Captain’s Arm Bar", details: "Wall-mount and ceiling speakers for immersive, zoned coverage. In-ceiling subwoofer for discreet, musical bass. Amplifier, DSP, and media player for consistent performance at varying volumes." },
        { name: "Outdoor LED Screen", details: "Q4OS — Q Series P4 outdoor LED screen for high-resolution visuals. Power transformers to ensure stable energy distribution. MRV208 Novastar receiving cards and Novastar VX4S all-in-one processor for reliable control and content management." }
      ]
    },
    outcomes: [
      "Audibly superior, venue-appropriate soundscapes indoors and outdoors.",
      "A striking LED platform for events, brand content, and live broadcasts.",
      "Elevated guest satisfaction and operational flexibility."
    ],
    challenges: [],
    image: "/images/case-studies/case-6/1.jpg",
    gallery: [
      "/images/case-studies/case-6/1.jpg",
      "/images/case-studies/case-6/2.jpg",
      "/images/case-studies/case-6/3.jpg",
      "/images/case-studies/case-6/4.jpg",
      "/images/case-studies/case-6/5.jpg",
      "/images/case-studies/case-6/6.jpg",
      "/images/case-studies/case-6/7.jpg",
    ]
  },
  {
    slug: "sheraton-abu-dhabi-hotel-resort-av-upgrade",
    client: "Sheraton Abu Dhabi Hotel & Resort",
    project: "AV System Upgrade across Ballrooms, Meeting Rooms, Tavern Bar, and Pool Bar",
    location: "Corniche Rd E — Al Zahiyah — E12 — Abu Dhabi",
    overview: "ETS modernized the hotel’s AV environment to elevate event quality and streamline daily operations, combining high‑brightness projection, premium audio, and intelligent control.",
    challenges: [
      "Large‑venue visual performance requiring high‑lumen projection.",
      "QSC‑based audio integration for consistent clarity.",
      "User‑friendly operation without compromising advanced functionality.",
      "Interactive, flexible meeting room technology.",
      "Immersive bar and poolside audio experiences.",
    ],
    solution: {
      title: "Solution by Space",
      components: [
        { name: "Arzana Ballroom", details: "12,000 ANSI lumens projector with short‑zoom lens and 200‑inch electric screen. Wireless presenter for seamless facilitation." },
        { name: "Audio Core", details: "Soundcraft audio mixer with microphones, QSC speakers, subwoofer, and amplifier. Crestron control processor for automated presets and simple operation." },
        { name: "Meeting Rooms", details: "86‑inch all‑in‑one displays with built‑in speakers, camera, and microphone. Native wireless screen sharing for frictionless presentations." },
        { name: "Ballroom AV", details: "Motorized screens with ultra‑short‑throw 10,000‑lumen projectors. Extron matrix switcher and control processor for seamless routing. Audio amplifier for balanced distribution." },
        { name: "Tavern Bar & Pool Bar", details: "High‑quality speakers, subwoofers, amplifiers, and DSP controller for tailored sound." },
      ]
    },
    outcomes: [
      "A cohesive, luxury‑grade AV experience across venues.",
      "Simplified operation for hotel teams and external partners.",
      "Improved event versatility and guest satisfaction.",
    ],
    image: "/placeholder-case-study.jpg",
    gallery: ["/placeholder-case-study.jpg"]
  },
  {
    slug: "grand-hyatt-abu-dhabi-hotel-wifi-modernization",
    client: "Grand Hyatt Hotel Emirates Pearl",
    project: "Enterprise‑Grade Aruba Wireless Network",
    location: "West Corniche, Corniche Road — Abu Dhabi",
    overview: "As a flagship luxury property, the hotel required hospitality‑grade wireless connectivity capable of supporting high device density, consistent coverage, and secure separation of guest and operational traffic.",
    solution: {
      title: "Solution Overview & Implementation",
      points: [
        "Aruba access points across guest rooms, public areas, meeting rooms, and back‑of‑house.",
        "Aruba wireless controllers for centralized configuration and optimization.",
        "High‑density design tailored to hotel and conference environments.",
        "Network segmentation with captive portal for branded authentication experiences.",
        "Advanced security with role‑based access control and policy enforcement.",
        "Comprehensive site survey and RF design for optimal AP placement.",
        "Phased deployment to avoid guest disruption."
      ]
    },
    outcomes: [
      "Consistent, high‑speed coverage property‑wide.",
      "Reduced connectivity‑related complaints and improved guest ratings.",
      "Secure staff and system access with room to scale for future services.",
    ],
    challenges: [],
    image: "/placeholder-case-study.jpg",
    gallery: ["/placeholder-case-study.jpg"]
  },
  {
    slug: "ritz-carlton-abu-dhabi-grand-canal-av-upgrade",
    client: "Abu Dhabi National Hotels",
    project: "New AV System for the Banquet Hall Area",
    location: "Al Rawdah — Al Maqta — Abu Dhabi",
    overview: "To accommodate high‑profile conferences, weddings, and product launches, the banquet hall required a technology refresh—delivering uniform audio coverage, high‑resolution visuals, flexible room configurations, and intuitive control for hotel teams and event partners.",
    solution: {
      title: "Solution Overview & Implementation",
      points: [
        "Professional loudspeakers and digital signal processing for even SPL and intelligibility.",
        "High‑resolution LED displays and projection for large‑format content.",
        "Wireless and wired microphone ecosystems for presenters and performers.",
        "Centralized AV control with user‑friendly touch panels.",
        "Integration with lighting and building‑management systems.",
        "Methodical planning to avoid operational disruption; acoustic evaluations prior to install.",
        "System tuning and staff enablement for confident day‑one operation."
      ]
    },
    outcomes: [
      "Significantly enhanced production values and venue flexibility for all event types."
    ],
    challenges: [],
    image: "/placeholder-case-study.jpg",
    gallery: ["/placeholder-case-study.jpg"]
  },
  {
    slug: "andaz-capital-gate-abu-dhabi-wifi6-upgrade",
    client: "ANDAZ Capital Gate Abu Dhabi — Hyatt Capital Gate Hotel",
    project: "Wi‑Fi Upgrade to Aruba Wi‑Fi 6",
    location: "6 Al Multaqa St — Al Rawdah — Abu Dhabi",
    overview: "Seamless, high‑speed coverage across guest rooms, public areas, and back‑of‑house. High device density during peak occupancy and events. Network stability, fast roaming, and secure segmentation for guests, staff, and systems.",
    solution: {
      title: "Solution Highlights & Implementation",
      points: [
        "Deployment of 214 enterprise‑grade Aruba access points across the property.",
        "High‑density design with centralized monitoring and management.",
        "Secure network segmentation and scalable architecture for future services.",
        "Detailed RF planning and a phased roll‑out to minimize impact on operations.",
        "Thorough testing, optimization, and handover to the hotel IT team."
      ]
    },
    outcomes: [
      "Marked improvement in performance and coverage throughout the hotel.",
      "Reduced connectivity incidents and enhanced guest satisfaction.",
      "Future‑ready infrastructure aligned with Hyatt/Andaz brand expectations."
    ],
    challenges: [],
    image: "/placeholder-case-study.jpg",
    gallery: ["/placeholder-case-study.jpg"]
  }
]