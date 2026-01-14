'use client';

import { motion } from "framer-motion";
import { Server, Home, Shield, Tv, Phone, Network } from "lucide-react";

const services = [
  {
    name: "Technical Support",
    description: "Reliable, 24/7 technical support to ensure your systems are always running smoothly.",
    icon: Server,
  },
  {
    name: "Home Automation",
    description: "Integrate and automate your home for enhanced comfort, convenience, and security.",
    icon: Home,
  },
  {
    name: "ELV & Security",
    description: "Comprehensive Extra-Low Voltage and security solutions to protect your assets.",
    icon: Shield,
  },
  {
    name: "IPTV & SMATV",
    description: "High-quality television distribution systems for hospitality and residential complexes.",
    icon: Tv,
  },
  {
    name: "Telecommunication",
    description: "Advanced telecommunication and IP telephony solutions for seamless connectivity.",
    icon: Phone,
  },
  {
    name: "Network Infrastructure",
    description: "Robust and scalable network infrastructure to support your business operations.",
    icon: Network,
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for a Connected Future
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide a comprehensive range of services to meet your technology needs, from initial consultation to ongoing support.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div 
                key={service.name} 
                className="flex flex-col p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
