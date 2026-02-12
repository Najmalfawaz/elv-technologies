'use client';

import { caseStudiesData } from "@/lib/case-studies-data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function CaseStudiesList() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`} className="group flex flex-col h-full">
                <Card className="flex flex-col h-full overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.project}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-100">
                        {study.client}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {study.project}
                    </h3>
                  </CardHeader>

                  <CardContent className="p-6 pt-2 flex-grow">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <MapPin className="h-4 w-4 mr-1 text-red-500" />
                      {study.location}
                    </div>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {study.overview}
                    </p>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 mt-auto">
                    <div className="flex items-center text-sm font-semibold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
