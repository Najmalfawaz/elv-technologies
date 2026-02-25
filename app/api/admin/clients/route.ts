import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, logo, category } = body;

        const client = await prisma.client.create({
            data: {
                name,
                logo,
                category
            }
        });

        return NextResponse.json(client);
    } catch (error) {
        console.error('Failed to create client:', error);
        return NextResponse.json({ error: 'Failed to create client' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const clients = await prisma.client.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(clients);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
    }
}
