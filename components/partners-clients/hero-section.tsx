'use client';

import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const count = useMotionValue(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(count, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => setDisplayValue(Math.round(latest))
            });
        }
    }, [isInView, value, count]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

export function HeroSection() {
    return (
        <div className="relative isolate overflow-hidden bg-slate-900 pb-10 pt-10 sm:pb-12">
            {/* Background gradients - Matching Blog/Case Studies */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-200 to-red-900 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-200 to-red-900 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-20">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-extrabold font-montserrat tracking-[0.1em] uppercase text-white sm:text-6xl">
                                Collaborating for <span className="text-red-500">Excellence</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-300 max-w-2xl mx-auto">
                                We bridge the gap between innovation and execution by partnering with top-tier technology providers and serving a diverse clientele. Together, we build the future.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <Link href="/case-studies">
                                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 h-14 px-8 text-lg font-bold font-montserrat uppercase tracking-wider rounded-xl group transition-all duration-300 shadow-lg shadow-red-500/20">
                                    View Our Works <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mx-auto mt-8 max-w-4xl"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:grid-cols-3 lg:gap-x-10 justify-center text-center">
                        <div className="flex flex-col items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl transition-transform duration-300 hover:scale-105">
                            <Users className="h-8 w-8 text-blue-400 mb-2" />
                            <span className="text-3xl font-bold italic">
                                <AnimatedCounter value={100} suffix="+" />
                            </span>
                            <span className="text-slate-400 font-normal text-sm">Global Partners</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl transition-transform duration-300 hover:scale-105">
                            <Trophy className="h-8 w-8 text-yellow-400 mb-2" />
                            <span className="text-3xl font-bold italic">
                                <AnimatedCounter value={2000} suffix="+" />
                            </span>
                            <span className="text-slate-400 font-normal text-sm">Happy Clients</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl transition-transform duration-300 hover:scale-105">
                            <ShieldCheck className="h-8 w-8 text-green-400 mb-2" />
                            <span className="text-3xl font-bold italic">
                                <AnimatedCounter value={100} suffix="%" />
                            </span>
                            <span className="text-slate-400 font-normal text-sm">Secure Solutions</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
