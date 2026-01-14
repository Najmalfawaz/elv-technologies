'use client';

import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              layout="fill" 
              objectFit="cover"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <span className="mx-3" aria-hidden="true">&middot;</span>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1.5" />
              <span>{post.author}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 prose prose-lg max-w-none"
        >
          {/* NOTE: When you have real blog content in markdown format, 
              you can parse and render it here. For now, we'll just show the excerpt. */}
          <p>{post.excerpt}</p>
          <p>{post.content}</p> {/** This will render the dummy '...' for now */}
        </motion.div>
      </div>
    </div>
  );
}
