import Link from "next/link"
import SocialLinks from "@/components/ui/social-links"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "Clients", href: "/clients" },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ELV Technology Solutions</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <SocialLinks variant="light" />
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ELV Technology Solutions LLC. All rights reserved.</p>
          <p className="mt-2">Leading Audio-Visual & ELV Company in Abu Dhabi, UAE</p>
        </div>
      </div>
    </footer>
  )
}
