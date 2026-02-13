'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      {
        label: "Security & Surveillance",
        href: "/solutions/security-surveillance",
        items: [
          { label: "Security & Surveillance", href: "/solutions/security-surveillance#security-surveillance-system" },
          { label: "Access Control & Time Attendance", href: "/solutions/security-surveillance#access-control" },
          { label: "Gate Barrier", href: "/solutions/security-surveillance#gate-barrier" },
          { label: "Nurse Call System", href: "/solutions/security-surveillance#nurse-call" },
          { label: "Queue Management System", href: "/solutions/security-surveillance#queue-management" },
          { label: "Disabled Toilet Alarm System", href: "/solutions/security-surveillance#disabled-alarm" },
        ]
      },
      {
        label: "Audio Visual Solutions",
        href: "/solutions/audio-visual",
        items: [
          { label: "Music Systems & BGM", href: "/solutions/audio-visual#music-bgm" },
          { label: "Indoor Video Wall", href: "/solutions/audio-visual#video-wall" },
          { label: "Conference Room", href: "/solutions/audio-visual#conference-room" },
          { label: "Meeting & Boardroom", href: "/solutions/audio-visual#meeting-boardroom" },
          { label: "Digital Signage", href: "/solutions/audio-visual#digital-signage" },
          { label: "LED Screen", href: "/solutions/audio-visual#led-screen" },
          { label: "Control Systems", href: "/solutions/audio-visual#control-systems" },
        ]
      },
      {
        label: "Network & Comms",
        href: "/solutions/network-communications",
        items: [
          { label: "Structured Cabling", href: "/solutions/network-communications#structured-cabling" },
          { label: "Wireless Network", href: "/solutions/network-communications#wireless-network" },
          { label: "Audio Video Intercom", href: "/solutions/network-communications#intercom" },
          { label: "Two Way Radio", href: "/solutions/network-communications#radio" },
          { label: "IP Phones", href: "/solutions/network-communications#ip-phones" },
          { label: "IPTV / SMATV", href: "/solutions/network-communications#iptv-smatv" },
          { label: "IT Equipment", href: "/solutions/network-communications#it-equipment" },
        ]
      },
      {
        label: "Home Automation",
        href: "/solutions/home-automation",
        items: [
          { label: "Home Automation", href: "/solutions/home-automation#automation" },
          { label: "Lighting Control", href: "/solutions/home-automation#lighting-control" },
        ]
      },
    ],
  },
  { label: "Partners & Clients", href: "/partners-clients" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/elvtechnologysolutions/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/elvtechnology2020",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elv-technology-solutions-llc/",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/elv_technology",
    icon: XIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971547922800",
    icon: MessageCircle,
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Track hovered category for desktop flyout
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  // Track open nested category in mobile
  const [mobileNestedOpen, setMobileNestedOpen] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubmenuOpen(null);
    setMobileNestedOpen(null);
    setActiveCategory(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar - white background */}
      <div
        className={`bg-background transition-all duration-500 ${isScrolled
          ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "shadow-[0_1px_0_0_hsl(var(--border))]"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 lg:h-[88px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src="/images/logo.png"
                alt="ELV Technology Solutions"
                width={90}
                height={90}
                className="w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.submenu &&
                    link.submenu.some((sub) => pathname === sub.href)) || (link.href.startsWith("/case-studies") && pathname.startsWith("/case-studies"));

                if (link.submenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => {
                        setOpenDropdown(null);
                        setActiveCategory(null);
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${isActive
                          ? "text-accent"
                          : "text-foreground/70 hover:text-foreground"
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3 w-3 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""
                            }`}
                        />
                      </Link>

                      {/* Dropdown Container */}
                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-300 ${openDropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                      >
                        <div className="bg-background rounded-xl border border-border shadow-xl shadow-foreground/5 p-2 flex">

                          {/* Level 1 Menu (Categories) */}
                          <div className="w-64 shrink-0">
                            {link.submenu.map((sub) => (
                              <div
                                key={sub.label}
                                onMouseEnter={() => setActiveCategory(sub.label)}
                                className="relative"
                              >
                                <Link
                                  href={sub.href}
                                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-[13px] transition-all duration-200 ${activeCategory === sub.label
                                    ? "bg-accent/5 text-accent"
                                    : "text-foreground/70 hover:bg-accent/5 hover:text-accent"
                                    }`}
                                >
                                  {sub.label}
                                  {sub.items && <ChevronRight className="h-3 w-3 opacity-50" />}
                                </Link>
                              </div>
                            ))}
                          </div>

                          {/* Level 2 Menu (Sub-items Flyout) */}
                          {link.submenu.some(s => s.label === activeCategory && s.items) && (
                            <div className="w-64 border-l border-border pl-2 ml-1">
                              {link.submenu.find(s => s.label === activeCategory)?.items?.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block rounded-lg px-4 py-2.5 text-[13px] text-foreground/70 transition-all duration-200 hover:bg-accent/5 hover:text-accent"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 group ${isActive
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent rounded-full transition-all duration-300 ${isActive
                        ? "w-5"
                        : "w-0 group-hover:w-5"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Contact Us button + Mobile toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-4 mr-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-all duration-300 hover:text-foreground hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden flex items-center justify-center h-10 w-10 rounded-lg text-foreground transition-all duration-300 hover:bg-secondary"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="relative h-5 w-5">
                  <Menu
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMobileMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                      }`}
                  />
                  <X
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                      }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`xl:hidden fixed inset-0 top-[calc(5rem+1px)] bg-background transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-4 py-6 h-full overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              if (link.submenu) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSubmenuOpen(
                          mobileSubmenuOpen === link.label ? null : link.label
                        )
                      }
                      className={`w-full flex items-center justify-between rounded-xl px-5 py-3.5 text-[15px] font-medium transition-all duration-300 ${isActive
                        ? "bg-accent/5 text-accent"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                        }`}
                      style={{
                        transitionDelay: isMobileMenuOpen
                          ? `${i * 50}ms`
                          : "0ms",
                        transform: isMobileMenuOpen
                          ? "translateX(0)"
                          : "translateX(-20px)",
                        opacity: isMobileMenuOpen ? 1 : 0,
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${mobileSubmenuOpen === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === link.label
                        ? "max-h-[800px] opacity-100" /* Increased max-height for nested items */
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pl-6 py-1 flex flex-col gap-1">
                        {link.submenu.map((sub) => (
                          <div key={sub.label}>
                            {sub.items ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setMobileNestedOpen(mobileNestedOpen === sub.label ? null : sub.label)}
                                  className="w-full flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:text-accent hover:bg-accent/5"
                                >
                                  {sub.label}
                                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileNestedOpen === sub.label ? "rotate-180" : ""}`} />
                                </button>

                                {/* Nested Accordion Content */}
                                <div className={`overflow-hidden transition-all duration-300 ${mobileNestedOpen === sub.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                  <div className="pl-4 border-l border-border/50 ml-4 py-1 flex flex-col gap-1">
                                    {sub.items.map(item => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="rounded-lg px-4 py-2 text-xs text-foreground/60 transition-colors hover:text-accent hover:bg-accent/5 block"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-2.5 text-sm text-foreground/60 transition-colors hover:text-accent hover:bg-accent/5"
                              >
                                {sub.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-5 py-3.5 text-[15px] font-medium transition-all duration-300 ${isActive
                    ? "bg-accent/5 text-accent"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${i * 50}ms`
                      : "0ms",
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-border pt-6">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
