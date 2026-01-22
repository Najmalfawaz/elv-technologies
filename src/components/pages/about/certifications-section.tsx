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
    <motion.div 
        className="group text-center transition-all duration-300 hover:scale-105"
        variants={itemVariants}
    >
        <div className="w-full h-64 bg-white rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm transition-all duration-300 group-hover:border-red-500 group-hover:shadow-xl flex justify-center items-center p-4">
            <Image
                src={cert.src}
                alt={cert.name}
                width={200}
                height={200}
                className="w-auto h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <p className="mt-4 text-base font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-600">{cert.name}</p>
    </motion.div>
);

const CertificateCategory = ({ title, icon: Icon, certificates, iconBg, iconColor }) => (
    <motion.div 
        className="space-y-8"
        variants={itemVariants}
    >
        <div className="flex items-center gap-4">
            <div className={`rounded-full ${iconBg} p-4`}>
                <Icon className={`h-8 w-8 ${iconColor}`} />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {certificates.map(cert => <CertificateCard key={cert.name} cert={cert} />)}
        </div>
    </motion.div>
);

export default function CertificationsSection() {
  return (
    <motion.section 
        className="bg-white py-20 lg:py-28"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Commitment to Excellence
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our certifications are a testament to our dedication to delivering the highest quality solutions while adhering to international standards for safety, environmental care, and operational excellence.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-16 md:grid-cols-1">
          <CertificateCategory 
            title="ISO Certifications" 
            icon={Award} 
            certificates={isoCertificates} 
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />
          <CertificateCategory 
            title="Authority Approvals" 
            icon={ShieldCheck} 
            certificates={authorityCertificates} 
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />
          <CertificateCategory 
            title="Compliance & Insurance" 
            icon={Building} 
            certificates={otherCertificates} 
            iconBg="bg-orange-100"
            iconColor="text-orange-600"
          />
        </div>
      </div>
    </motion.section>
  )
}
