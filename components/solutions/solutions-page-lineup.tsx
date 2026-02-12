'use client';

import { solutionsData } from "@/lib/solutions-data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPageLineup() {
    const verticals = [
        solutionsData.securityAndSurveillance,
        solutionsData.audioVisual,
        solutionsData.networkAndCommunications,
        solutionsData.homeAutomation
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {verticals.map((vertical) => (
                        <Link href={`/solutions/${vertical.id}`} key={vertical.id} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            {/* Card Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10" />
                                <Image
                                    src={`https://placehold.co/800x600/1e293b/ffffff?text=${encodeURIComponent(vertical.title)}`}
                                    alt={vertical.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <h2 className="text-2xl font-bold text-white mb-2">{vertical.title}</h2>
                                    <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-20 transition-all duration-300" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                    {vertical.description}
                                </p>
                                <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    View Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
