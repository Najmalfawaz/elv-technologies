import { NextResponse } from 'next/server';
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
        await prisma.caseStudy.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
}
