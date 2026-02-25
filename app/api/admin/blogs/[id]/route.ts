import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils'; // Ensure this exists or move logic here

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id: params.id }
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
        const { title, excerpt, content, image, category, author, published } = body;

        // If title changes, update slug (optional, maybe keep slug stable)
        let slug;
        if (title) {
            slug = slugify(title);
            // Check collision except self
            const existing = await prisma.blog.findFirst({
                where: {
                    slug,
                    NOT: { id: params.id }
                }
            });
            if (existing) slug = `${slug}-${Date.now()}`;
        }

        const blog = await prisma.blog.update({
            where: { id: params.id },
            data: {
                title,
                ...(slug && { slug }),
                excerpt,
                content,
                image,
                category,
                author,
                published
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
            where: { id: params.id } // Prisma delete by unique ID
        });

        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        // If searching by slug in a route designed for ID, handle accordingly. 
        // But usually admin routes use ID. If using slug in admin URL, adjust where clause.
        // Assuming ID for now.
        console.error('Failed to delete blog:', error);
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}
