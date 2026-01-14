'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap, Ear, Settings, Tv } from 'lucide-react';
import Image from 'next/image';

const services = {
  technicalSupport: {
    title: 'Technical Support in UAE',
    image: '/images/services/support.jpg',
    description: 'ELV Technology Solutions delivers reliable technical support, ELV, AV, and IT services across Abu Dhabi, Dubai, and the wider UAE. We help businesses maintain secure, stable, and efficient operations through proactive management and fast-response support. Our team ensures smooth performance across networks, servers, workstations, cloud environments, and security systems—reducing downtime and increasing productivity.',
    capabilities: {
      elv: {
        title: 'ELV Systems',
        items: [
          { text: 'CCTV and surveillance solutions', icon: <Shield className="w-5 h-5 mr-3 text-orange-500" /> },
          { text: 'Access control and time attendance', icon: <Check className="w-5 h-5 mr-3 text-orange-500" /> },
          { text: 'Structured cabling & fibre infrastructure', icon: <Zap className="w-5 h-5 mr-3 text-orange-500" /> },
          { text: 'Intercom and IP telephony', icon: <Ear className="w-5 h-5 mr-3 text-orange-500" /> },
        ],
      },
      av: {
        title: 'AV Systems',
        items: [
          { text: 'Meeting room & boardroom AV', icon: <Tv className="w-5 h-5 mr-3 text-orange-500" /> },
          { text: 'Video conferencing solutions', icon: <Tv className="w-5 h-5 mr-3 text-orange-500" /> },
          { text: 'Sound systems & display integrations', icon: <Ear className="w-5 h-5 mr-3 text-orange-500" /> },
        ],
      },
    },
    benefits: {
        title: 'Why Choose Us?',
        items: [
          { text: 'SLA-driven fast response service', icon: <Zap className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Secure remote & onsite assistance', icon: <Shield className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Scalable solutions for growing businesses', icon: <Settings className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Experienced ELV, AV, and IT team', icon: <Check className="w-5 h-5 mr-3 text-red-600" /> },
        ],
      },
  },
  programming: {
    title: 'Programming and Commissioning',
    image: '/images/services/programming.jpg',
    description: 'Our experienced programmers have deep expertise across major ELV and AV systems, brands, and platforms. We design and program solutions tailored precisely to organizational requirements, technical specifications, and operational workflows. We also provide system commissioning services for projects of any size—from straightforward installations to complex, large-scale deployments—ensuring correct functionality, optimal performance, and long-term reliability at every level.',
  },
  amc: {
    title: 'Annual Maintenance Contract (AMC)',
    image: '/images/services/amc.jpg',
    description: 'Our AMC service ensures your systems receive regular maintenance, fast support, and proactive monitoring, giving you uninterrupted performance and peace of mind throughout the year.',
    systems: {
        title: 'Systems We Cover',
        items: [
          { text: 'Access Control', icon: <Check className="w-5 h-5 mr-2 text-primary" /> },
          { text: 'CCTV Systems', icon: <Shield className="w-5 h-5 mr-2 text-primary" /> },
          { text: 'SMATV / IPTV', icon: <Tv className="w-5 h-5 mr-2 text-primary" /> },
          { text: 'IP Phone Systems', icon: <Ear className="w-5 h-5 mr-2 text-primary" /> },
          { text: 'PA Systems', icon: <Ear className="w-5 h-5 mr-2 text-primary" /> },
          { text: 'IT Equipment', icon: <Settings className="w-5 h-5 mr-2 text-primary" /> },
        ],
      },
      includes: {
        title: 'What Our AMC Includes',
        description: 'Our AMC provides access to a dedicated team of skilled engineers who ensure your systems operate reliably with minimal disruption.',
        serviceVisits: {
          title: 'We provide two types of service visits:',
          items: [
            { title: 'Incident-Based Support', description: 'For unexpected issues, breakdowns, and urgent troubleshooting to restore system functionality.' },
            { title: 'Preventive Maintenance', description: 'Scheduled visits to inspect, test, clean, and optimize equipment to reduce failures.' },
          ],
        },
      },
      benefits: {
        title: 'Why Choose Our AMC?',
        items: [
          { text: 'Fast, reliable on-site support', icon: <Zap className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Trained engineers for all major systems', icon: <Check className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Proactive maintenance to prevent downtime', icon: <Settings className="w-5 h-5 mr-3 text-red-600" /> },
          { text: 'Detailed reporting after each visit', icon: <Shield className="w-5 h-5 mr-3 text-red-600" /> },
        ],
        footer: 'Flexible AMC packages tailored to client needs across the UAE.',
      },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // A smooth ease-out cubic bezier curve
        }
    }
};


const ServicesSection = () => {
  return (
    <motion.section 
      className="py-20 bg-slate-50"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-balance">
            <span className="block text-slate-800">Our Professional Services</span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mt-2">
              For Your Business
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Delivering reliable and scalable technology solutions across the UAE to drive growth, efficiency, and peace of mind.
          </p>
        </motion.div>

        <div className="space-y-20">
          
          {/* Technical Support Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div className="relative h-full" variants={imageVariant}>
              <Image src={services.technicalSupport.image} alt={services.technicalSupport.title} layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{services.technicalSupport.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{services.technicalSupport.description}</p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                 <motion.div className="bg-slate-100 rounded-xl p-6" variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-4 text-slate-800">{services.technicalSupport.capabilities.elv.title}</h3>
                    <motion.ul className="space-y-3" variants={sectionVariants}>
                      {services.technicalSupport.capabilities.elv.items.map((item, index) => (
                        <motion.li key={index} className="flex items-center text-gray-700 font-medium" variants={itemVariants}>{item.icon}{item.text}</motion.li>
                      ))}
                    </motion.ul>
                 </motion.div>
                 <motion.div className="bg-slate-100 rounded-xl p-6" variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-4 text-slate-800">{services.technicalSupport.capabilities.av.title}</h3>
                    <motion.ul className="space-y-3" variants={sectionVariants}>
                      {services.technicalSupport.capabilities.av.items.map((item, index) => (
                        <motion.li key={index} className="flex items-center text-gray-700 font-medium" variants={itemVariants}>{item.icon}{item.text}</motion.li>
                      ))}
                    </motion.ul>
                 </motion.div>
              </div>
              <motion.div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6" variants={itemVariants}>
                 <h3 className="text-xl font-bold mb-4 text-slate-900">{services.technicalSupport.benefits.title}</h3>
                 <motion.ul className="space-y-3" variants={sectionVariants}>
                    {services.technicalSupport.benefits.items.map((item, index) => (
                      <motion.li key={index} className="flex items-center text-gray-800 font-semibold" variants={itemVariants}>{item.icon}{item.text}</motion.li>
                    ))}
                 </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Programming Section */}
          <motion.div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div className="md:order-2" variants={itemVariants}>
                     <h2 className="text-3xl font-bold mb-4 text-white">{services.programming.title}</h2>
                     <p className="text-gray-300 leading-relaxed text-lg">{services.programming.description}</p>
                </motion.div>
                <motion.div className="relative h-80 md:h-full md:order-1" variants={imageVariant}>
                    <Image src={services.programming.image} alt={services.programming.title} layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
                </motion.div>
            </div>
          </motion.div>

          {/* AMC Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div className="relative h-full" variants={imageVariant}>
              <Image src={services.amc.image} alt={services.amc.title} layout="fill" objectFit="cover" className="rounded-2xl shadow-xl" />
            </motion.div>
            <motion.div variants={itemVariants}>
               <h2 className="text-3xl font-bold mb-4 text-slate-900">{services.amc.title}</h2>
               <p className="text-gray-700 leading-relaxed mb-6">{services.amc.description}</p>
               <div className="space-y-6">
                   <motion.div className="bg-slate-100 rounded-xl p-6" variants={itemVariants}>
                      <h3 className="text-xl font-bold mb-4">{services.amc.systems.title}</h3>
                      <motion.ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3" variants={sectionVariants}>
                         {services.amc.systems.items.map((item, index) => (
                           <motion.li key={index} className="flex items-center text-gray-700 font-medium" variants={itemVariants}>{item.icon}{item.text}</motion.li>
                         ))}
                      </motion.ul>
                   </motion.div>
                   <motion.div className="bg-slate-100 rounded-xl p-6" variants={itemVariants}>
                       <h3 className="text-xl font-bold mb-4 text-slate-800">{services.amc.includes.title}</h3>
                       <p className="text-gray-600 mb-4">{services.amc.includes.description}</p>
                        <motion.ul className="space-y-3" variants={sectionVariants}>
                          {services.amc.includes.serviceVisits.items.map((item, index) => (
                            <motion.li key={index} variants={itemVariants}><strong className="text-gray-800 font-semibold">{item.title}:</strong> <span className='text-gray-700'>{item.description}</span></motion.li>
                          ))}
                        </motion.ul>
                   </motion.div>
                   <motion.div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6" variants={itemVariants}>
                       <h3 className="text-xl font-bold mb-4 text-slate-900">{services.amc.benefits.title}</h3>
                       <motion.ul className="space-y-3" variants={sectionVariants}>
                           {services.amc.benefits.items.map((item, index) => (
                             <motion.li key={index} className="flex items-center text-gray-800 font-semibold" variants={itemVariants}>{item.icon}{item.text}</motion.li>
                           ))}
                       </motion.ul>
                       <p className="text-center text-gray-700 font-semibold mt-4">{services.amc.benefits.footer}</p>
                   </motion.div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
