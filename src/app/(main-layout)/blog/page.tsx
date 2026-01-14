'use client';

import { blogs } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

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
            From the Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with the latest industry insights, trends, and success stories from our team.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
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
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="flex-shrink-0">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={250} 
                  className="h-56 w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <span aria-hidden="true">&middot;</span>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
