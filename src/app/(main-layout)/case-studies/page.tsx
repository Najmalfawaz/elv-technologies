
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'Modernizing a Legacy System for a Fortune 500 Company',
    category: 'Enterprise Solutions',
    slug: 'modernizing-legacy-system',
    imageUrl: '/images/case-studies/study-1.jpg',
    excerpt: 'A comprehensive overhaul of a critical legacy system, resulting in a 50% increase in efficiency and a 30% reduction in operational costs.',
  },
  {
    id: 2,
    title: 'Developing a Scalable E-commerce Platform for a Growing Retailer',
    category: 'E-commerce',
    slug: 'scalable-ecommerce-platform',
    imageUrl: '/images/case-studies/study-2.jpg',
    excerpt: 'Building a new e-commerce platform from the ground up, capable of handling a 10x increase in traffic and sales during peak seasons.',
  },
  {
    id: 3,
    title: 'Implementing a Data-Driven Marketing Strategy for a SaaS Company',
    category: 'Data & Analytics',
    slug: 'data-driven-marketing',
    imageUrl: '/images/case-studies/study-3.jpg',
    excerpt: 'Leveraging data analytics to create a highly effective marketing strategy, leading to a 200% increase in qualified leads.',
  },
  {
    id: 4,
    title: 'Designing a User-Centric Mobile App for a Healthcare Provider',
    category: 'Mobile & Web Apps',
    slug: 'user-centric-mobile-app',
    imageUrl: '/images/case-studies/study-4.jpg',
    excerpt: 'Creating an intuitive and accessible mobile app that improved patient engagement and communication with healthcare professionals.',
  },
];

const categories = [
  'All',
  'Enterprise Solutions',
  'E-commerce',
  'Data & Analytics',
  'Mobile & Web Apps',
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies
    .filter(study => selectedCategory === 'All' || study.category === selectedCategory)
    .filter(study => study.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-gray-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Case Studies</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we've helped our clients overcome their challenges and achieve their goals.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                  {category}
                </button>
              ))}
            </div>
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map(study => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-red-600">{study.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{study.title}</h3>
                  <p className="mt-3 text-base text-gray-600 line-clamp-3">{study.excerpt}</p>
                  <div className="mt-4">
                    <a href={`/case-studies/${study.slug}`} className="text-red-600 font-semibold hover:underline">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Recent Case Studies</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map(study => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-red-600">{study.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{study.title}</h3>
                  <div className="mt-4">
                    <a href={`/case-studies/${study.slug}`} className="text-red-600 font-semibold hover:underline">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
