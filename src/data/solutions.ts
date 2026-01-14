
import { ShieldCheck, Monitor, Tv, Network, Phone, Home, Server } from 'lucide-react';
import { SecuritySurveillance } from '@/components/pages/solutions/security-surveillance';
import { AudioVisualSolutions } from '@/components/pages/solutions/audio-visual';
import { IPTVSolutions } from '@/components/pages/solutions/iptv-smatv';
import { NetworkCommunications } from '@/components/pages/solutions/network-communications';
import { IPPhones } from '@/components/pages/solutions/ip-phones';
import { HomeAutomation } from '@/components/pages/solutions/home-automation';
import { ITEquipment } from '@/components/pages/solutions/it-equipment';

export const solutions = [
  {
    icon: ShieldCheck,
    title: "Security & Surveillance",
    description: "Protect your assets with our advanced security and surveillance solutions.",
    features: [
      "High-resolution IP cameras",
      "Network video recorders (NVRs)",
      "Video management software (VMS)",
      "Access control systems",
      "Intrusion detection systems",
    ],
    applications: [
      "Commercial buildings",
      "Retail stores",
      "Residential complexes",
      "Public spaces",
    ],
    component: SecuritySurveillance,
  },
  {
    icon: Monitor,
    title: "Audio Visual Solutions",
    description: "Engage your audience with immersive audio-visual experiences.",
    features: [
      "Video conferencing systems",
      "Projectors and displays",
      "Sound systems",
      "Digital signage",
      "Interactive whiteboards",
    ],
    applications: [
      "Boardrooms and meeting rooms",
      "Auditoriums and event spaces",
      "Classrooms and training centers",
      "Retail and hospitality environments",
    ],
    component: AudioVisualSolutions,
  },
  {
    icon: Tv,
    title: "IPTV & SMATV",
    description: "Deliver high-quality television content over your IP network.",
    features: [
      "IPTV headend systems",
      "Set-top boxes and media players",
      "Video on demand (VOD) and catch-up TV",
      "Middleware and content management",
      "Satellite and terrestrial TV integration",
    ],
    applications: [
      "Hotels and resorts",
      "Hospitals and healthcare facilities",
      "Residential compounds",
      "Corporate offices",
    ],
    component: IPTVSolutions,
  },
  {
    icon: Network,
    title: "Network Communications",
    description: "Build a reliable and scalable network infrastructure for your business.",
    features: [
      "Structured cabling (copper and fiber)",
      "Wireless network solutions",
      "Switches, routers, and firewalls",
      "Network management and monitoring",
      "Data center solutions",
    ],
    applications: [
      "Enterprise and campus networks",
      "Data centers and server rooms",
      "Small and medium-sized businesses",
      "Hospitality and public venues",
    ],
    component: NetworkCommunications,
  },
  {
    icon: Phone,
    title: "IP Phones",
    description: "Modernize your communication with feature-rich IP phone systems.",
    features: [
      "VoIP and Unified Communications",
      "PBX and IP-PBX systems",
      "Desk phones and softphones",
      "Conferencing and collaboration tools",
      "Call center solutions",
    ],
    applications: [
      "Corporate offices and call centers",
      "Remote and hybrid work environments",
      "Hospitality and healthcare",
      "Educational institutions",
    ],
    component: IPPhones,
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Experience the convenience and comfort of a smart home.",
    features: [
      "Lighting and climate control",
      "Smart security and access control",
      "Home theater and entertainment systems",
      "Voice control and mobile apps",
      "Energy management solutions",
    ],
    applications: [
      "Luxury villas and apartments",
      "Smart homes and residential communities",
      "Hospitality suites",
    ],
    component: HomeAutomation,
  },
  {
    icon: Server,
    title: "IT Equipment",
    description: "Source the right IT hardware and software for your business needs.",
    features: [
      "Servers, storage, and networking equipment",
      "Laptops, desktops, and workstations",
      "Printers and peripherals",
      "Software licensing and management",
      "IT procurement and consulting",
    ],
    applications: [
      "Small and medium-sized businesses",
      "Enterprise IT departments",
      "Data centers and server rooms",
      "Educational and government institutions",
    ],
    component: ITEquipment,
  },
];
