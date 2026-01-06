import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "/technology-partner-logo-1.jpg" },
  { name: "Partner 2", logo: "/technology-partner-logo-2.jpg" },
  { name: "Partner 3", logo: "/technology-partner-logo-3.jpg" },
  { name: "Partner 4", logo: "/technology-partner-logo-4.jpg" },
  { name: "Partner 5", logo: "/technology-partner-logo-5.jpg" },
  { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Partners</h2>
        <div className="relative overflow-hidden group">
          <div className="flex animate-[slide_10s_linear_infinite] group-hover:pause">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 p-4"
              >
                <div className="flex items-center justify-center h-24 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
