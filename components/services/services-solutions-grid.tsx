'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { solutionsData } from '@/lib/solutions-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSolutionsGrid() {
    // Extract all solution items from the nested structure
    const allSolutions = [
        ...solutionsData.securityAndSurveillance.items,
        ...solutionsData.audioVisual.items,
        ...solutionsData.networkAndCommunications.items,
        ...solutionsData.homeAutomation.items,
    ];

    // Specific list requested by user to highlight
    const priorityList = [
        'Access Control & Time Attendance',
        'Gate Barrier',
        'Nurse Call System',
        'Music Systems and BGM Solutions',
        'Indoor Video Wall',
        'Meeting and Boardroom',
        'Digital Signage',
        'Structured Cabling Solutions',
        'Wireless Network Solutions',
        'IPTV / SMATV',
        'Home Automation',
        'Lighting Control Systems'
    ];

    // Filter and sort based on priority list, but keeping objects
    const displayedSolutions = allSolutions.filter(item =>
        priorityList.some(p => item.title.includes(p) || p.includes(item.title))
    );

    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Dark Theme Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#0A0A0A_70%,transparent_100%)]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 mb-6 backdrop-blur-md">
                        SPECIALIZED SOLUTIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Our Core Competencies
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
                        Expertly designed and implemented systems tailored to your specific industry needs.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {displayedSolutions.map((solution, idx) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-xl shadow-lg border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] hover:-translate-y-2"
                        >
                            <div className="relative h-56 w-full overflow-hidden border-b border-white/10 flex-shrink-0">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />

                                <div className="absolute bottom-4 left-4 z-10 flex items-center justify-center h-12 w-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors shadow-xl">
                                    <solution.icon className="h-6 w-6" />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6 pt-5">
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 tracking-tight group-hover:text-accent transition-colors">
                                    {solution.title}
                                </h3>

                                {/* We extract a short snippet from the description content if available */}
                                <p className="text-sm text-slate-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                                    {solution.content?.description?.[0] || "Advanced solution for modern requirements."}
                                </p>

                                <div className="mt-auto pt-5 border-t border-white/10">
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Key Features</h4>
                                    <ul className="space-y-2 mb-6">
                                        {/* @ts-ignore - Content structure varies between solution types */}
                                        {((solution.content as any)?.subsections?.[0]?.points || (solution.content as any)?.keyFeatures?.points || []).slice(0, 3).map((pt: any, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-1 shrink-0 ring-1 ring-accent/30" />
                                                <span className="line-clamp-1">{typeof pt === 'string' ? pt : 'Feature'}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/solutions/${solution.id}`} // Assuming routing structure or just fallback
                                        className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-semibold text-white group-hover:bg-white/10 transition-colors"
                                    >
                                        Learn more
                                        <div className="p-1 rounded-full bg-accent text-white group-hover:scale-110 transition-transform">
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
