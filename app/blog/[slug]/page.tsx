import BlogSlugPage from "@/components/blog/blog-slug-page";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <BlogSlugPage slug={params.slug} />;
}
