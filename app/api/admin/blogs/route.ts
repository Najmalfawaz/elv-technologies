import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { slugify } from '@/lib/utils';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, excerpt, content, image, category, author, published } = body;

        // Create slug from title
        let slug = slugify(title);

        // Check if slug exists
        const existingBlog = await prisma.blog.findUnique({
            where: { slug }
        });

        if (existingBlog) {
            slug = `${slug}-${Date.now()}`;
        }

        const blog = await prisma.blog.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                image,
                category,
                author,
                published: published || false,
            }
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Failed to create blog:', error);
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
