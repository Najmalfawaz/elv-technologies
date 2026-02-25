export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const partner = await prisma.partner.findUnique({
            where: { id: params.id }
        });

        if (!partner) {
            return NextResponse.json({ error: 'Partner not found' }, { status: 404 });
        }

        return NextResponse.json(partner);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch partner' }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { name, logo, website, category } = body;

        const partner = await prisma.partner.update({
            where: { id: params.id },
            data: {
                name,
                logo,
                website,
                category
            }
        });

        return NextResponse.json(partner);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update partner' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.partner.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Partner deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete partner' }, { status: 500 });
    }
}
