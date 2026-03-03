'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Building, Calendar, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CaseStudySolution {
  title: string;
  components?: Array<{
    name: string;
    details: string;
  }>;
  points?: string[];
}

interface CaseStudy {
  slug: string;
  project: string;
  client: string;
  image: string;
  overview: string;
  challenges: string[];
  solution: CaseStudySolution;
  gallery?: string[];
  outcomes: string[];
  location: string;
  category?: string;
}

interface CaseStudySlugPageProps {
  study: CaseStudy;
  prevStudy?: CaseStudy;
  nextStudy?: CaseStudy;
}

export default function CaseStudySlugPage({ study, prevStudy, nextStudy }: CaseStudySlugPageProps) {
  if (!study) {
    notFound();
  }

  // Combine main image and gallery for the hero slider
  const allImages = [study.image, ...(study.gallery || [])];

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden" ref={allImages.length > 1 ? emblaRef : undefined}>
        {allImages.length > 1 ? (
          <div className="flex h-full w-full">
            {allImages.map((img, i) => (
              <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full w-full">
                <Image
                  src={img}
                  alt={`${study.project} - Slide ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            src={study.image}
            alt={study.project}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30 pointer-events-none" />
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 pb-16 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/case-studies" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
                <ChevronLeft className="mr-1 h-4 w-4" /> Back to Case Studies
              </Link>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className="bg-red-600 hover:bg-red-700 text-white border-none text-sm py-1 px-3">
                  {study.category || 'Infrastructure'}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-4xl">
                {study.client}
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-medium text-slate-200 max-w-3xl">
                {study.project}
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg prose-slate dark:prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-12">
                {study.overview}
              </p>

              <Separator className="my-12" />

              {study.challenges.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Challenge</h2>
                  <div className="bg-slate-50 dark:bg-slate-900/50 border-l-4 border-red-600 p-6 rounded-r-lg">
                    <ul className="space-y-3 mt-0">
                      {study.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                          <div className="mt-1.5 mr-3 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Solution</h2>
                <div className="space-y-6">
                  <p className="font-medium text-slate-900 dark:text-white text-xl">{study.solution.title}</p>
                  {study.solution.components?.map((component, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600" />
                        {component.name}
                      </h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-400 pl-7">{component.details}</p>
                    </div>
                  ))}
                  {study.solution.points && (
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                      <ul className="space-y-3">
                        {study.solution.points.map((point: string, index: number) => (
                          <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                            <CheckCircle className="mt-1 mr-3 h-5 w-5 text-red-600 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {study.gallery && study.gallery.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {study.gallery.map((img: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300"
                      >
                        <Image
                          src={img}
                          alt={`${study.project} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {study.outcomes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Outcomes</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {study.outcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100 dark:border-green-900/20">
                        <CheckCircle className="mt-0.5 mr-3 h-5 w-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Client</p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{study.client}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{study.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-700 p-6 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-2">Ready to transform your business?</h3>
                <p className="text-red-100 mb-6">Let's discuss how we can help you achieve similar results.</p>
                <Link href="/contact" className="w-full">
                  <Button variant="secondary" className="w-full bg-white text-red-700 hover:bg-red-50 font-bold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevStudy ? (
            <Link href={`/case-studies/${prevStudy.slug}`} className="group flex flex-col items-start p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 transition-colors">
              <span className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400">
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Success
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">{prevStudy.client}</span>
            </Link>
          ) : <div />}

          {nextStudy ? (
            <Link href={`/case-studies/${nextStudy.slug}`} className="group flex flex-col items-end text-right p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 transition-colors">
              <span className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400">
                Next Success <ArrowRight className="ml-2 h-4 w-4" />
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">{nextStudy.client}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
