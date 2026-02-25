import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id: params.id }
        });

        if (!caseStudy) {
            return NextResponse.json({ error: 'Case Study not found' }, { status: 404 });
        }

        return NextResponse.json(caseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const {
            slug: userSlug,
            project,
            client,
            image,
            overview,
            challenges,
            solution,
            gallery,
            outcomes,
            location
        } = body;

        let slug = userSlug;
        // slug update logic if needed, usually we don't update slug unless requested.

        const caseStudy = await prisma.caseStudy.update({
            where: { id: params.id },
            data: {
                slug,
                project,
                client,
                image,
                overview,
                challenges,
                solution,
                gallery,
                outcomes,
                location
            }
        });

        return NextResponse.json(caseStudy);
    } catch (error) {
        console.error('Failed to update case study:', error);
        return NextResponse.json({ error: 'Failed to update case study' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.caseStudy.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Case Study deleted successfully' });
    } catch (error) {
        console.error('Failed to delete case study:', error);
        return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
}
