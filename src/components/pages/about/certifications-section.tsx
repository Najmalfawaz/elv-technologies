'use client';
import { motion, Variants } from 'framer-motion';
import { Award, ShieldCheck, Building } from 'lucide-react';
import Image from 'next/image';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const isoCertificates = [
    { name: 'ISO 9001', src: '/images/about/iso/iso1.jpg' },
    { name: 'ISO 14001', src: '/images/about/iso/iso2.png.jpg' },
    { name: 'ISO 45001', src: '/images/about/iso/iso3.jpg' },
];

const authorityCertificates = [
    { name: 'TDRA Accreditation', src: '/images/about/Authority Certificates/auth1.jpg' },
    { name: 'MCC License', src: '/images/about/Authority Certificates/auth2.jpg' },
];

const otherCertificates = [
    { name: 'Insurance Certificate', src: '/images/about/Insurance & ICV/ins1.jpg' },
    { name: 'In-Country Value (ICV)', src: '/images/about/Insurance & ICV/icv.jpg' },
];

const CertificateCard = ({ cert }: { cert: { name: string; src: string }}) => (
    <div className="text-center">
        <div className="w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200 p-4">
            <Image
                src={cert.src}
                alt={cert.name}
                width={400}
                height={300}
                className="w-full h-auto object-contain"
            />
        </div>
        <p className="mt-3 text-base font-semibold text-gray-800">{cert.name}</p>
    </div>
);

export default function CertificationsSection() {
  return (
    <motion.section 
        className="bg-gray-50 py-20 lg:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Certifications</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We are certified to the highest standards, reflecting our commitment to quality, safety, environmental responsibility, and regulatory compliance.
          </p>
        </motion.div>

        <motion.div 
            className="mt-16 grid gap-10 md:grid-cols-1 lg:grid-cols-3"
            variants={sectionVariants}
        >
          <motion.div 
            className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 lg:p-8 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">ISO Certificates</h3>
            </div>
            <div className="space-y-6 pt-2">
                {isoCertificates.map(cert => <CertificateCard key={cert.name} cert={cert} />)}
            </div>
          </motion.div>

          <motion.div 
            className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 lg:p-8 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <ShieldCheck className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Authority Certificates</h3>
            </div>
             <div className="space-y-8 pt-2">
                {authorityCertificates.map(cert => <CertificateCard key={cert.name} cert={cert} />)}
            </div>
          </motion.div>

          <motion.div 
            className="rounded-xl border border-gray-200 bg-white shadow-lg p-6 lg:p-8 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-100 p-3">
                <Building className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Insurance & ICV</h3>
            </div>
             <div className="space-y-8 pt-2">
                {otherCertificates.map(cert => <CertificateCard key={cert.name} cert={cert} />)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
