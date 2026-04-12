import { PrismaClient } from '@prisma/client';
import { google } from '@ai-sdk/google';
import { embed } from 'ai';

const prisma = new PrismaClient();

const KNOWLEDGE_DATA = [
  // Company Profile
  "ELV Technology Solutions (ETS) is a premier technology integrator based in Abu Dhabi, United Arab Emirates. We have successfully completed over 2,000 projects for 500+ enterprise clients over the past 7+ years.",
  "ETS provides services across the entire UAE, including Abu Dhabi, Dubai, Sharjah, and the Northern Emirates. Our head office is located in Al Danah, Abu Dhabi (Al Falah St.).",
  "Major clients of ETS include Abu Dhabi Ports Company (PJSC), The Ritz-Carlton Abu Dhabi, and ANDAZ Capital Gate. We serve government, hospitality, and commercial sectors.",

  // Security & Surveillance
  "We specialize in AI-powered CCTV and high-definition surveillance systems. This includes IP and Analog cameras (Dome, Bullet, PTZ), NVR/DVR storage, and real-time threat detection analytics.",
  "ETS provides advanced Biometric Access Control systems, including facial recognition and fingerprint scanners, to secure corporate and residential premises.",
  "Our security solutions include automated Gate Barriers featuring ANPR (Automatic Number Plate Recognition) and RFID technology for seamless vehicle entry management.",
  "We design and install Nurse Call systems for hospitals and specialized Disabled Toilet Alarms for commercial compliance.",

  // Audio-Visual (AV)
  "ETS is a specialist in Boardroom and Meeting Room integration. We provide seamless setups for Microsoft Teams and Zoom, including high-quality microphones and soundbars.",
  "We install large-scale Indoor and Outdoor LED Video Walls for advertising, events, and corporate lobbies, featuring high-fidelity brightness and contrast.",
  "Our AV services include Digital Signage solutions for retail, restaurants, and hospitality to manage dynamic content across multiple displays.",
  "We offer Multi-zone Background Music (BGM) systems for hotels, shopping malls, and offices, allowing centralized control of audio environments.",

  // Networking & IT
  "ETS provides end-to-end Structured Cabling solutions, including Fiber Optic and Cat6A installations for robust data backbones in offices and industrial sites.",
  "We design enterprise-grade Wi-Fi networks using premium hardware like Aruba, Cisco, and Ruckus to ensure zero dead spots and high-user density support.",
  "Our IT solutions include IP Telephony (PABX) systems, allowing for seamless internal and external communications for businesses of all sizes.",

  // Smart Home & Automation
  "We provide comprehensive Smart Home Automation, including lighting control, motorized curtain motors, and smart thermostats integrated into a single interface.",
  "ETS designs luxury Home Automation systems using the KNX protocol for stability and flexibility in high-end villas and residential apartments.",

  // Business FAQs
  "Initial site assessments and quotations from ELV Technology Solutions are completely free of charge. Pricing is determined after evaluating specific project requirements.",
  "Small projects like meeting room upgrades or villa CCTV usually take 1-3 days to complete. Larger scale enterprise builds follow a project timeline discussed with the client.",
  "We provide Annual Maintenance Contracts (AMC) which include regular system health checks, preventive maintenance, and emergency on-site support for all ELV/AV systems."
];

async function seed() {
  console.log("🚀 Starting knowledge base seeding...");

  for (const text of KNOWLEDGE_DATA) {
    process.stdout.write(`Processing: ${text.substring(0, 50)}... `);
    
    try {
      // Generate embedding
      const { embedding } = await embed({
        model: google.textEmbeddingModel('text-embedding-004'),
        value: text,
      });

      // Insert into DB
      // We use $executeRaw because Prisma doesn't support vector assignment in typical 'create' yet
      const vectorString = `[${embedding.join(',')}]`;
      
      await prisma.$executeRawUnsafe(
        `INSERT INTO "KnowledgeBase" (id, content, embedding, "updatedAt") 
         VALUES (gen_random_uuid()::text, $1, $2::vector, NOW())`,
        text,
        vectorString
      );

      console.log("✅");
    } catch (err) {
      console.error("\n❌ Error:", err);
    }
  }

  console.log("\n✨ Seeding complete!");
  await prisma.$disconnect();
}

seed();
