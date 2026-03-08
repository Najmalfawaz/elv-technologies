export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id: params.id } // Note: Assuming find by ID first, can add fallback to slug if needed
        });

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { title, slug, excerpt, content, image, category, author, date } = body;

        const blog = await prisma.blog.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                excerpt,
                content,
                image,
                category,
                author,
                date: date ? new Date(date) : undefined
            }
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Failed to update blog:', error);
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.blog.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}
