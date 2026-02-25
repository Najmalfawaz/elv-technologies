export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, logo, website, category } = body;

        const partner = await prisma.partner.create({
            data: {
                name,
                logo,
                website,
                category
            }
        });

        return NextResponse.json(partner);
    } catch (error) {
        console.error('Failed to create partner:', error);
        return NextResponse.json({ error: 'Failed to create partner' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const partners = await prisma.partner.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(partners);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
    }
}
