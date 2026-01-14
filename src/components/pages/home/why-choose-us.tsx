'use client';

import { motion } from "framer-motion";
import { Award, Users, Wrench, Clock } from "lucide-react";

const features = [
  {
    name: "Proven Expertise",
    description: "Our team of certified professionals has years of experience in delivering complex technology projects.",
    icon: Award,
  },
  {
    name: "Customer-Centric Approach",
    description: "We prioritize your needs and work collaboratively to deliver solutions that exceed your expectations.",
    icon: Users,
  },
  {
    name: "Reliability and Quality",
    description: "We are committed to delivering high-quality, reliable solutions that stand the test of time.",
    icon: Wrench,
  },
  {
    name: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any issues.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Trusted Partner in Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are more than just a technology provider. We are your partner in innovation, dedicated to helping you achieve your goals.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
