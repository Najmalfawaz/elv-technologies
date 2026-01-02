"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/ui/social-links"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "Clients", href: "/clients" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 animate-in fade-in slide-in-from-top-4 duration-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 md:p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              ELV <span className="text-primary">Technology Solutions</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors animate-in fade-in slide-in-from-top-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4 md:gap-x-6">
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 animate-in fade-in zoom-in-50 duration-700"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
