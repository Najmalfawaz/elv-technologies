import BlogSlugPage from "@/components/blog/blog-slug-page";
import { getCollection } from "@/lib/db";
import { notFound } from "next/navigation";

import { Blog } from "@prisma/client";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const posts = await getCollection('blogs') as Blog[];
    const post = posts.find((p: any) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <BlogSlugPage post={post} />;
}
