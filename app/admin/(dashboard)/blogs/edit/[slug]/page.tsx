'use client';

import { useEffect, useState, use } from 'react';
import { BlogForm } from '@/components/admin/blogs/blog-form';
import { toast } from 'sonner';
import { blogPosts } from '@/lib/blog-data';

export default function EditBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            try {
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 500));

                const found = blogPosts.find((b: any) => b.slug === resolvedParams.slug);
                if (found) {
                    setBlog(found);
                } else {
                    toast.error('Blog not found');
                }
            } catch (error) {
                toast.error('Failed to load blog');
            } finally {
                setLoading(false);
            }
        }
        fetchBlog();
    }, [resolvedParams.slug]);

    if (loading) return <div>Loading...</div>;
    if (!blog) return <div>Blog not found</div>;

    return (
        <div className="space-y-6">
            <BlogForm initialData={blog} isEditing />
        </div>
    );
}
