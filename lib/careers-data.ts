export interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
}

export const jobOpenings: JobOpening[] = [
    {
        id: "elv-engineer",
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
        id: "av-technician",
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
        id: "network-specialist",
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
