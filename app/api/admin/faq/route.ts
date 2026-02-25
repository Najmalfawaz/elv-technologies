import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { question, answer, category } = body;

        const faq = await prisma.fAQ.create({
            data: {
                question,
                answer,
                category: category || ''
            }
        });

        return NextResponse.json(faq);
    } catch (error) {
        console.error('Failed to create FAQ:', error);
        return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const faqs = await prisma.fAQ.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(faqs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
    }
}
