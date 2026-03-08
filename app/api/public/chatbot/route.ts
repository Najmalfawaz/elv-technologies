import { NextResponse } from 'next/server';

// This is the knowledge base extracted from the system prompt
const KNOWLEDGE_BASE = {
    company: {
        name: "ELV Technology Solutions (ETS)",
        track_record: "2,000+ successful projects, 500+ enterprise clients, 7+ years of excellence",
        location: "Head Office in Al Danah, Abu Dhabi (Al Falah St.)",
    },
    solutions: [
        {
            ids: ['security', 'cctv', 'surveillance', 'camera'],
            text: "**Security & Surveillance:** We offer AI-powered CCTV, Biometric Access Control, Gate Barriers (ANPR/RFID), Nurse Call Systems, and Disabled Toilet Alarms. All our systems are designed for real-time analytics and threat detection."
        },
        {
            ids: ['av', 'audio', 'visual', 'meeting', 'video wall', 'signage', 'led'],
            text: "**Audio-Visual (AV) Solutions:** We specialize in Boardroom & Meeting Room integration (MS Teams/Zoom), large-scale Indoor/Outdoor LED Walls, Digital Signage, and Multi-zone Background Music (BGM) systems for hospitality and retail."
        },
        {
            ids: ['network', 'wifi', 'cabling', 'fiber', 'internet', 'it'],
            text: "**Network & Communications:** Our expertise includes Structured Cabling (Fiber Optic & Cat6A), Enterprise Wi-Fi (Aruba/Cisco/Ruckus), IP Telephony (Cisco/Avaya), and IPTV/SMATV for high-rise buildings and hotels."
        },
        {
            ids: ['home', 'automation', 'lighting', 'smart'],
            text: "**Smart Home & Lighting:** We provide advanced Home Automation and Lighting Control systems for luxury villas and commercial buildings, focusing on energy efficiency and intuitive control."
        }
    ],
    faq: [
        {
            keywords: ['price', 'cost', 'expensive', 'quote', 'quotation', 'charges'],
            answer: "Pricing depends on your specific site requirements and the scope of work. We highly recommend a **Free Site Survey** so we can provide an accurate customized quote. Would you like me to note down your details for a callback?"
        },
        {
            keywords: ['time', 'how long', 'duration', 'days'],
            answer: "Small projects like villa CCTV typically take 1-2 days. Larger commercial integrations usually take 3-7 days depending on the complexity of the systems involved."
        },
        {
            keywords: ['maintenance', 'amc', 'support', 'repair', 'fix'],
            answer: "Yes, we offer comprehensive **Annual Maintenance Contracts (AMC)** for all our ELV, AV, and Networking systems to ensure zero-downtime and long-term reliability."
        }
    ]
};

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const lowerMessage = message.toLowerCase();

        // --- FUTURE AI INTEGRATION START ---
        // if (process.env.OPENAI_API_KEY) {
        //   // Call OpenAI/Gemini here using the system prompt
        //   // return NextResponse.json({ text: aiResponse });
        // }
        // --- FUTURE AI INTEGRATION END ---

        // Smart Router Fallback
        let responseText = "";

        // 1. Check for pricing/quote intent first
        const pricingMatch = KNOWLEDGE_BASE.faq[0].keywords.some(k => lowerMessage.includes(k));
        if (pricingMatch) {
            responseText = KNOWLEDGE_BASE.faq[0].answer;
        }

        // 2. Check solutions
        if (!responseText) {
            const solution = KNOWLEDGE_BASE.solutions.find(s => s.ids.some(id => lowerMessage.includes(id)));
            if (solution) {
                responseText = `${solution.text}\n\nWe offer free site visits to design the best setup for you. Shall I schedule one?`;
            }
        }

        // 3. Check other FAQs
        if (!responseText) {
            const otherFaq = KNOWLEDGE_BASE.faq.slice(1).find(f => f.keywords.some(k => lowerMessage.includes(k)));
            if (otherFaq) responseText = otherFaq.answer;
        }

        // 4. Default Fallback
        if (!responseText) {
            responseText = "I'm the ETS Assistant! I can help you with Security, AV, Networking, and Smart Home solutions in the UAE. \n\nCould you tell me a bit more about what you're looking for, or would you prefer a quick callback from our engineering team?";
        }

        // Add a signature feel
        // responseText = `**ETS Assistant:**\n\n${responseText}`;

        return NextResponse.json({
            text: responseText,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chatbot API Error:', error);
        return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
    }
}
