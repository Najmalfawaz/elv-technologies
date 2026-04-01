import BlogHero from '@/components/blog/blog-hero';
import BlogList from '@/components/blog/blog-list';
import { getCollection } from '@/lib/db';
import { Blog } from '@prisma/client';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    const posts = await getCollection('blogs') as Blog[];

    return (
        <main>
            <BlogHero />
            <BlogList initialPosts={posts} />
        </main>
    );
}
