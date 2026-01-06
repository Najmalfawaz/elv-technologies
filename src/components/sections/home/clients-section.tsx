import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/abstract-logo-1.png" },
  { name: "Client 2", logo: "/abstract-logo-geometric.png" },
  { name: "Client 3", logo: "/abstract-logo-design-3.png" },
  { name: "Client 4", logo: "/abstract-logo-4.png" },
  { name: "Client 5", logo: "/abstract-logo-5.png" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=160" },
]

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-600">We are proud to partner with a diverse range of clients who trust us to deliver excellence.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={140}
                height={70}
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
