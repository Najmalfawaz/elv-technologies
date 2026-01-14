'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Building2, Building, Heart, Hotel, GraduationCap, Home, ShoppingBag, Users, Church } from "lucide-react"

const sectors = [
    { icon: Building2, name: "Government", image: "/images/about/sectors/Goverment.jpg" },
    { icon: Building, name: "Corporate", image: "/images/about/sectors/coorperate.jpg" },
    { icon: Heart, name: "Healthcare", image: "/images/about/sectors/healtcare.jpg" },
    { icon: Hotel, name: "Hospitality", image: "/images/about/sectors/hospitality.jpg" },
    { icon: GraduationCap, name: "Educational Institution", image: "/images/about/sectors/educationalinstitute.jpg" },
    { icon: Home, name: "Villa", image: "/images/about/sectors/villa.jpg" },
    { icon: ShoppingBag, name: "Retail", image: "/images/about/sectors/retail.jpg" },
    { icon: Users, name: "Residentials", image: "/images/about/sectors/residentials.jpg" },
    { icon: Church, name: "House of worship", image: "/images/about/sectors/houseofworships.jpg" },
  ];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function SectorsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Sectors We Are Covering</h2>
          <p className="mt-4 text-lg text-gray-600">We provide tailored technology solutions across a diverse range of sectors, ensuring excellence for every industry.</p>
        </motion.div>

        <motion.div 
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.name}
                className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-200"
                variants={itemVariants}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/10 backdrop-blur-sm p-3 border border-white/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{sector.name}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
