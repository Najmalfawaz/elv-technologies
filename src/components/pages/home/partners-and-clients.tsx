'use client';

import { motion } from "framer-motion";

const clients = [
  { src: "/images/clients/logo1.png", alt: "Client 1" },
  { src: "/images/clients/logo2.png", alt: "Client 2" },
  { src: "/images/clients/logo3.png", alt: "Client 3" },
  { src: "/images/clients/logo4.png", alt: "Client 4" },
  { src: "/images/clients/logo5.png", alt: "Client 5" },
  { src: "/images/clients/logo6.png", alt: "Client 6" },
];

const partners = [
  { src: "/images/partners/logo1.png", alt: "Partner 1" },
  { src: "/images/partners/logo2.png", alt: "Partner 2" },
  { src: "/images/partners/logo3.png", alt: "Partner 3" },
  { src: "/images/partners/logo4.png", alt: "Partner 4" },
  { src: "/images/partners/logo5.png", alt: "Partner 5" },
  { src: "/images/partners/logo6.png", alt: "Partner 6" },
];

export default function PartnersAndClients() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Trusted Partners
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                We collaborate with industry leaders to deliver the best possible solutions.
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={logo.src}
                alt={logo.alt}
                width={158}
                height={48}
              />
            </motion.div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-center mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Valued Clients
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                We have earned the trust of a diverse range of clients.
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={logo.src}
                alt={logo.alt}
                width={158}
                height={48}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
