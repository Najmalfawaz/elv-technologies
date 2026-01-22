'use client'

import Link from "next/link"
import SocialLinks from "@/components/ui/social-links"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { solutions } from "@/data/solutions"
import { Button } from "@/components/ui/button"
import ContactDialog from "@/components/shared/contact-dialog"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { navigation } from "@/data/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactOpen, setContactOpen] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const pathname = usePathname()

  const formatSolutionURL = (title: string) => {
    if (title.toLowerCase() === 'security & surveillance') {
      return '/solutions/security-&-surveillance'
    }
    if (title.toLowerCase() === 'iptv & smatv') {
      return '/solutions/iptv-&-smatv'
    }
    return `/solutions/${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, "-")}`
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 animate-in fade-in slide-in-from-top-4 duration-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 md:p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo.png"
              alt="ELV Technology Solutions"
              width={160}
              height={40}
              priority
              className="h-8 w-auto sm:h-9 md:h-10"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item, index) => {
            if (item.name === "Solutions") {
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setShowSolutions(true)}
                  onMouseLeave={() => setShowSolutions(false)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors cursor-pointer animate-in fade-in slide-in-from-top-2 duration-500 ${
                      pathname.startsWith(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}>
                      {item.name}
                  </Link>
                  <AnimatePresence>
                    {showSolutions && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg p-2 z-10"
                      >
                        <div className="grid gap-1">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.title}
                              href={formatSolutionURL(solution.title)}
                              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors"
                            >
                              <solution.icon className="h-5 w-5 text-primary" />
                              <span className="text-sm font-medium text-gray-800">{solution.title}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors cursor-pointer animate-in fade-in slide-in-from-top-2 duration-500 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-4 md:gap-x-6">
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
          <Button onClick={() => setContactOpen(true)}>Contact Us</Button>
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => {
              if (item.name === "Solutions") {
                return (
                  <Accordion key={item.name} type="single" collapsible className="w-full">
                    <AccordionItem value="solutions">
                      <AccordionTrigger className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 no-underline">
                        <Link href="/solutions" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.title}
                            href={formatSolutionURL(solution.title)}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50 ${
                    pathname === item.href ? "text-primary bg-gray-50" : "text-gray-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
      <ContactDialog open={isContactOpen} onOpenChange={setContactOpen} />
    </header>
  )
}
