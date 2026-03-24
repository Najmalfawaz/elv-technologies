'use client';

import { motion } from 'framer-motion';



export default function BlogHero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32 lg:py-40 h-[500px] flex items-center">
            {/* Background gradients - Matching Case Studies */}
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

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Insights & <span className="text-red-500">Innovation</span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Stay updated with the latest trends in Fiber-optic technology, ELV systems, and smart infrastructure solutions in Abu Dhabi and across the UAE.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
