import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            slug: userSlug,
            project,
            client,
            image,
            overview,
            challenges,
            solution, // object
            gallery,
            outcomes,
            location
        } = body;

        let slug = userSlug;
        if (!slug) {
            slug = slugify(`${client} ${project}`);
        }

        // Check unique slug
        const existing = await prisma.caseStudy.findUnique({ where: { slug } });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }

        const caseStudy = await prisma.caseStudy.create({
            data: {
                slug,
                project,
                client,
                image,
                overview,
                challenges,
                solution, // Json
                gallery,
                outcomes,
                location
            }
        });

        return NextResponse.json(caseStudy);
    } catch (error) {
        console.error('Failed to create case study:', error);
        return NextResponse.json({ error: 'Failed to create case study' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(caseStudies);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
    }
}
