const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const staticJobOpenings = [
    {
        title: "ELV Engineer",
        department: "Engineering",
        location: "Abu Dhabi, UAE",
        type: "Full-time",
        description: "We are looking for an experienced ELV Engineer to design, implement, and manage integrated ELV systems including CCTV, Access Control, and Structured Cabling.",
        requirements: [
            "Bachelor's degree in Electrical/Electronic Engineering or related field.",
            "Minimum 3-5 years of experience in ELV systems integration.",
            "Proficiency in AutoCAD and ELV design software.",
            "Strong communication and project management skills.",
        ],
    },
    {
        title: "AV Technician",
        department: "Technical",
        location: "Abu Dhabi, UAE",
        type: "Full-time",
        description: "Seeking a skilled AV Technician to handle installation, configuration, and troubleshooting of professional audio-visual systems, LED screens, and BGM systems.",
        requirements: [
            "Diploma or technical certification in Electronics or AV technology.",
            "Proven experience in installing video walls, projectors, and sound systems.",
            "Knowledge of control systems and signal routing.",
            "Ability to work in a fast-paced environment.",
        ],
    },
    {
        title: "Network Specialist",
        department: "IT Infrastructure",
        location: "Abu Dhabi, UAE",
        type: "Full-time",
        description: "Join our team as a Network Specialist to design and maintain high-performance wireless and wired networks for enterprise clients.",
        requirements: [
            "CCNA or higher certification is preferred.",
            "Experience with Cisco/Aruba wireless solutions and structured cabling.",
            "Strong debugging and network optimization skills.",
            "Understanding of network security protocols.",
        ],
    },
];

async function main() {
    console.log('Clearing old careers...');
    await prisma.career.deleteMany();

    console.log('Seeding new careers...');
    for (const job of staticJobOpenings) {
        await prisma.career.create({
            data: {
                title: job.title,
                department: job.department,
                location: job.location,
                type: job.type,
                description: job.description,
                requirements: job.requirements,
            }
        });
    }
    console.log('✅ Successfully seeded Careers to DB!');
}

main()
    .catch((e) => {
        console.error('Error during migration:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
