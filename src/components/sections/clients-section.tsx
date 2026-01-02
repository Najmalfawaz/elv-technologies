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
    <section className="py-16 bg-gray-50 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] -mt-8 md:-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
