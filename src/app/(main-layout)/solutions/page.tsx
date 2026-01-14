'use client';

import { solutions } from "@/data/solutions";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our comprehensive range of technology solutions designed to empower your business.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Link 
                href={`/solutions/${solution.title.toLowerCase().replace(/ /g, "-")}`}
                className="flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 h-full"
              >
                <solution.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-6 text-xl font-bold text-gray-900">{solution.title}</h3>
                <p className="mt-4 text-base text-gray-600 flex-grow">{solution.description}</p>
                <div className="mt-6">
                  <span className="flex items-center text-primary font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
