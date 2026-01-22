
import { blogs } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecentBlogSection() {
  const recentBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.slice(0, 3).map((blog) => (
            <div key={blog.slug} className="bg-card shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{blog.date}</p>
                <h3 className="text-xl font-bold mt-2 mb-4">{blog.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href={`/blog/${blog.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
