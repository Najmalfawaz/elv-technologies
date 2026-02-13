'use client';

import { motion } from 'framer-motion';

export default function SolutionsHero() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            {/* Subtle background elements for a "high-tech" professional feel */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-100 to-red-50 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-red-600 ring-1 ring-inset ring-red-600/10 mb-8 bg-red-50/50">
                            Solutions
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8">
                            Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Technology Solutions</span>
                        </h1>
                        <p className="text-xl leading-9 text-slate-600 max-w-2xl mx-auto">
                            Comprehensive, integrated systems designed for security, audio-visual, networking, and automation across the UAE's modern landscape.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-slate-200 to-slate-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Geometric subtle pattern */}
            <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
}
