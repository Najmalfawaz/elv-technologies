import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/technology-partner-logo-1.jpg" },
  { name: "Partner 2", logo: "/technology-partner-logo-2.jpg" },
  { name: "Partner 3", logo: "/technology-partner-logo-3.jpg" },
  { name: "Partner 4", logo: "/technology-partner-logo-4.jpg" },
  { name: "Partner 5", logo: "/technology-partner-logo-5.jpg" },
  { name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
