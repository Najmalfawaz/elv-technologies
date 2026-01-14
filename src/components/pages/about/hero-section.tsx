'use client';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function AboutHeroSection() {
  return (
    <motion.section 
      className="relative bg-gray-50 overflow-hidden py-20 lg:py-28"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <div className="absolute inset-x-0 top-0 h-96 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
            variants={itemVariants}
          >
            <span className="block text-slate-900">ELV Technology Solution!!!</span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mt-2">
              The Best Audio-Visual Integrators in UAE!!!
            </span>
          </motion.h1>

          <motion.div 
            className="prose prose-lg mx-auto mt-8 space-y-6"
            variants={containerVariants}
          >
            <motion.p className="text-gray-600 leading-relaxed text-balance" variants={itemVariants}>
              ETS is one of the top technology integrators and solution providers in the UAE, specializing in security
              and surveillance systems, Audio Visual (AV) solutions, Extra Low Voltage (ELV) systems, and Home
              Automation technologies.
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed text-balance" variants={itemVariants}>
              We represent reputed global manufacturers and serve a wide customer base across multiple market sectors
              throughout the UAE. Our highly skilled professional team is equipped to manage the complex requirements of
              large-scale projects with precision and efficiency. The high standards we maintain have earned us lasting
              trust from business owners, architects, consultants, and contractors alike.
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed text-balance" variants={itemVariants}>
              Our clients are consistently assured of the best-in-class design, delivery, installation, integration, and
              maintenance services, setting us apart as a reliable and innovative partner in the technology solutions
              industry.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
