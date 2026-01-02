import { Building2, Building, Heart, Hotel, GraduationCap, Home, ShoppingBag, Users, Church } from "lucide-react"

const sectors = [
  { icon: Building2, name: "Government", query: "modern government building exterior" },
  { icon: Building, name: "Corporate", query: "modern corporate office building" },
  { icon: Heart, name: "Healthcare", query: "modern hospital healthcare facility" },
  { icon: Hotel, name: "Hospitality", query: "luxury hotel interior lobby" },
  { icon: GraduationCap, name: "Educational Institution", query: "modern university campus" },
  { icon: Home, name: "Villa", query: "luxury villa residential exterior" },
  { icon: ShoppingBag, name: "Retail", query: "modern retail shopping mall" },
  { icon: Users, name: "Residential", query: "modern residential apartment building" },
  { icon: Church, name: "House of Worship", query: "modern worship building exterior" },
]

export default function SectorsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sectors We Are Covering</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.name}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-primary transition-all"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=400&query=${encodeURIComponent(sector.query)}`}
                      alt={sector.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/20 backdrop-blur-sm p-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{sector.name}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
