import { NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { findRelevantContext } from '@/lib/chatbot/vector-store';

const INTENTS = {
    OUT_OF_SCOPE: [
        {
            keywords: ['weapon', 'gun', 'kill', 'bomb', 'harm', 'illegal', 'crime', 'murder', 'drugs', 'suicide', 'abuse', 'violence', 'how to make a'],
            answer: "I cannot fulfill this request. I am a corporate virtual assistant for ELV Technology Solutions. Please keep your inquiries relevant to our business services (AV, Security, and Networking)."
        },
        {
            keywords: ['website', 'web dev', 'app ', 'software', 'seo', 'cloud hosting', 'erp', 'accounting', 'marketing', 'social media'],
            answer: "No, web and app development is outside our scope. We focus on physical technology integration like ELV and AV systems."
        },
        {
            keywords: ['repair laptop', 'repair phone', 'repair ac', 'fix laptop', 'fix computer', 'fix phone', 'desktop', 'smartphone', 'printer', 'hvac', 'water heater', 'air conditioning', 'fridge'],
            answer: "No, we do not repair personal devices (laptops, phones) or MEP systems (like HVAC/AC). We specialize in enterprise technology integration."
        },
        {
            keywords: ['hack', 'hidden camera', 'recover deleted', 'spy', 'unauthorized'],
            answer: "No, absolutely not. We do not engage in hacking, data recovery, or installing hidden cameras."
        }
    ],
    GREETINGS: [
        {
            keywords: ['hi', 'hello', 'hey', 'how are you', 'how are u', 'good morning', 'good afternoon', 'greetings', 'morning', 'evening'],
            answer: "Hello! 👋 I'm the ETS Virtual Assistant. I can help you with Security, AV, Networking, and Smart Home solutions. What can I assist you with today?"
        }
    ]
};

const SYSTEM_PROMPT = `
You are the ETS Assistant representing ELV Technology Solutions (Abu Dhabi, UAE).
You provide expert advice on Security (CCTV), AV, Networking, and Smart Automation.

GUIDELINES:
1. USE ONLY the provided context to answer the user's question.
2. If the answer is NOT in the context, politely say you don't have that specific information and suggest they speak to our engineering team.
3. Keep responses professional, helpful, and concise (2-4 sentences).
4. Always mention "free site assessment" for project inquiries.
5. Do NOT mention competitors or services outside our ELV scope.
`;

function shouldCaptureLead(input: string): boolean {
    const triggers = ['quote', 'price', 'install', 'need', 'project', 'looking for', 'schedule', 'visit', 'survey', 'buy', 'cost', 'site assessment'];
    return triggers.some(t => input.toLowerCase().includes(t));
}

export async function POST(req: Request) {
    try {
        const { message, history = [] } = await req.json();
        const lowerMessage = message.toLowerCase();

        // 1. FAST PATH: Out of Scope
        const outOfScopeMatch = INTENTS.OUT_OF_SCOPE.find(item => 
            item.keywords.some(k => lowerMessage.includes(k))
        );
        if (outOfScopeMatch) {
            return NextResponse.json({ text: outOfScopeMatch.answer, captureLead: false });
        }

        // 2. FAST PATH: Greetings
        const greetingMatch = INTENTS.GREETINGS.find(item => 
            item.keywords.some(k => lowerMessage.includes(k)) && lowerMessage.length < 20
        );
        if (greetingMatch) {
            return NextResponse.json({ text: greetingMatch.answer, captureLead: false });
        }

        // 3. RAG PATH: Semantic Retrieval
        let context = "";
        try {
            context = await findRelevantContext(message);
        } catch (dbError) {
            console.error("Vector Store Error:", dbError);
            // Non-blocking: continue without context if DB isn't ready locally
        }

        // 4. LLM GENERATION: Grounded by Context
        const { text } = await generateText({
            model: google('gemini-1.5-flash'),
            system: `${SYSTEM_PROMPT}\n\nCONTEXT FROM KNOWLEDGE BASE:\n${context}`,
            messages: [...history, { role: 'user', content: message }],
            temperature: 0.2, // Lower temperature for higher factuality
        });

        const captureLead = shouldCaptureLead(message) || shouldCaptureLead(text);

        // Logging
        console.log(`[RAG-Chatbot] msg: "${message}" | context: ${context ? 'found' : 'none'} | capture: ${captureLead}`);

        return NextResponse.json({ 
            text, 
            captureLead 
        });

    } catch (error) {
        console.error('Chatbot API Error:', error);
        return NextResponse.json({ 
            text: "I apologize, but I'm having a technical issue. Please try again or contact us directly at **+971 54 792 2800**.", 
            captureLead: false 
        });
    }
}
