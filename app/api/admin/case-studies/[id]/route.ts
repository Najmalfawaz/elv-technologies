import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id: params.id }
        });

        if (!caseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json(caseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const updatedCaseStudy = await prisma.caseStudy.update({
            where: { id: params.id },
            data: body
        });

        revalidatePath('/');
        revalidatePath('/case-studies');
        revalidatePath(`/case-studies/${updatedCaseStudy.slug}`);

        return NextResponse.json(updatedCaseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update case study' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id: params.id },
            select: { slug: true }
        });

        await prisma.caseStudy.delete({
            where: { id: params.id }
        });

        revalidatePath('/');
        revalidatePath('/case-studies');
        if (caseStudy?.slug) {
            revalidatePath(`/case-studies/${caseStudy.slug}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
}
