'use client';

import { blogs } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Our Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the latest in technology, security, and automation with insights from our experts. We share practical advice, industry trends, and success stories to help you stay ahead.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {blogs.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start justify-between"
            >
                <div className="relative w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={250} 
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <User className="h-4 w-4 mr-1.5" />
                        <span>{post.author}</span>
                    </div>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-6">
                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold leading-6 text-red-500 hover:text-red-600 flex items-center"> 
                        Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
