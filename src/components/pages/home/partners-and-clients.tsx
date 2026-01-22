'use client';

import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { clients, partners } from "@/data/images";
import * as Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function PartnersAndClients() {
  const plugin = useRef(
    Autoplay.default({ delay: 2000, stopOnInteraction: true })
  );

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
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto mt-16"
        >
          <CarouselContent>
            {partners.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2"
                >
                  <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="max-w-2xl mx-auto text-center mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Valued Clients
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                We have earned the trust of a diverse range of clients.
            </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto mt-16"
        >
          <CarouselContent>
            {clients.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2"
                >
                  <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
