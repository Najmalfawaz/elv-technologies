import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const testimonial = await prisma.testimonial.findUnique({
            where: { id: params.id }
        });

        if (!testimonial) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonial' }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { name, role, company, content, rating, image } = body;

        const testimonial = await prisma.testimonial.update({
            where: { id: params.id },
            data: {
                name,
                role,
                company,
                content,
                rating: Number(rating),
                image
            }
        });

        return NextResponse.json(testimonial);
    } catch (error) {
        console.error('Failed to update testimonial:', error);
        return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.testimonial.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Failed to delete testimonial:', error);
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
