'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Rocket, Eye, Heart, CheckCircle } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

const MissionVisionValues = () => {
  const values = [
    'Treat everyone with respect and dignity',
    'Commit to continuous improvement through training and knowledge sharing.',
    'Demonstrate teamwork, honesty, and integrity in all engagements.',
    'Maintain a friendly approach and honour every commitment made.',
    'Ensure Quality Assurance across all tasks and project stages.',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-full text-white">
                  <Rocket className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver end-to-end technology solutions that exceed client expectations through innovative design, reliable implementation, and future-ready support infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-full text-white">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To continue as the leading provider of Audio Visual Solutions, ELV Systems, Security & Surveillance, and Home Automation technologies in Abu Dhabi and all-over the UAE by consistently delivering excellence and maximizing value for our clients.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div variants={cardVariants} className="md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-full text-white">
                  <Heart className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
              </div>
              <motion.ul 
                className="space-y-3 text-gray-700"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                animate="visible"
              >
                {values.map((value, index) => (
                  <motion.li key={index} className="flex items-start gap-3" variants={listItemVariants}>
                    <CheckCircle className="h-5 w-5 mt-1 text-orange-500 flex-shrink-0" />
                    <span>{value}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
