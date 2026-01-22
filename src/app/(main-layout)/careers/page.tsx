'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, DollarSign, ChevronDown, Upload, Send } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior ELV Technician',
    location: 'Abu Dhabi, UAE',
    salary: 'AED 8,000 - AED 12,000',
    description: 'We are looking for an experienced Senior ELV Technician to lead our installation and maintenance teams. The ideal candidate will have extensive knowledge of CCTV, access control, and structured cabling systems.',
    responsibilities: [
      'Lead and mentor a team of ELV technicians.',
      'Oversee the installation and commissioning of complex ELV systems.',
      'Perform high-level troubleshooting and fault analysis.',
      'Ensure compliance with all safety and quality standards.',
    ],
  },
  {
    title: 'Junior ELV Technician',
    location: 'Dubai, UAE',
    salary: 'AED 4,000 - AED 6,000',
    description: 'We are seeking a motivated Junior ELV Technician to assist with the installation and maintenance of various ELV systems. This is an excellent opportunity to grow your skills in a dynamic environment.',
    responsibilities: [
      'Assist with the installation of CCTV, access control, and other ELV systems.',
      'Perform routine maintenance and inspections.',
      'Troubleshoot and resolve basic technical issues.',
      'Work closely with senior technicians to learn new skills.',
    ],
  },
];

const JobCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden mb-6"
    >
      <motion.div layout className="p-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-6 w-6 mr-4 text-red-500" />
            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          </div>
          <ChevronDown className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className="mt-4 flex items-center text-gray-500 text-sm space-x-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            <span>{job.salary}</span>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-6 pb-6"
          >
            <p className="text-base text-gray-600 mb-4">{job.description}</p>
            <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {job.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
            </ul>
            <div className="mt-6">
              <a href="#submit-cv"
                className="text-red-500 hover:text-red-600 font-semibold text-sm flex items-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CareersPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl py-24 sm:py-32 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-12"
        >
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Build Your Career With Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are seeking passionate and skilled ELV Technicians to join our growing team. Explore the opportunities below and take the next step in your career.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {jobOpenings.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </motion.div>

        <motion.div 
          id="submit-cv"
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Submit Your CV</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Don't see an open position that fits your profile? Send us your CV, and we'll get in touch if a suitable role becomes available.</p>
            <form className="mt-10 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-left">
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
                  <input type="text" id="full-name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm mt-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
                  <input type="email" id="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm mt-2" />
                </div>
                <div>
                    <label htmlFor="cover-letter" className="block text-sm font-semibold leading-6 text-gray-900">Cover Letter</label>
                    <textarea id="cover-letter" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm mt-2"></textarea>
                </div>
                <div>
                  <label htmlFor="cv" className="block text-sm font-semibold leading-6 text-gray-900">Upload CV</label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PDF, DOCX, DOC up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Send className="h-5 w-5 mr-3" />
                  Submit Application
                </button>
              </div>
            </form>
        </motion.div>
      </div>
    </div>
  );
}
