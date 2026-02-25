import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, role, company, content, rating, image } = body;

        const testimonial = await prisma.testimonial.create({
            data: {
                name,
                role: role || '',
                company: company || '',
                content,
                rating: Number(rating),
                image
            }
        });

        return NextResponse.json(testimonial);
    } catch (error) {
        console.error('Failed to create testimonial:', error);
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}
