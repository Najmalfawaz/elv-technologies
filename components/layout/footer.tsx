"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

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

const elvSystems = [
  { label: "Security and Surveillance", href: "/solutions/security-surveillance" },
  { label: "Access Control & Time Attendance", href: "/solutions/access-control" },
  { label: "Gate Barrier System", href: "/solutions/gate-barrier" },
  { label: "Nurse Call System", href: "/solutions/nurse-call" },
  { label: "Queue Management System", href: "/solutions/queue-management" },
  { label: "Disabled Toilet Alarm System", href: "/solutions/disabled-toilet-alarm" },
];

const avSolutions = [
  { label: "Music and BGM System", href: "/solutions/music-bgm" },
  { label: "Indoor Video Wall", href: "/solutions/video-wall" },
  { label: "Conference Room", href: "/solutions/conference-room" },
  { label: "Meeting Room & Board Room", href: "/solutions/meeting-room" },
  { label: "Digital Signage", href: "/solutions/digital-signage" },
  { label: "LED Screen", href: "/solutions/led-screen" },
  { label: "Control Systems", href: "/solutions/control-systems" },
];

const networkComms = [
  { label: "Structured Cabling Solutions", href: "/solutions/structured-cabling" },
  { label: "Wireless Network Solutions", href: "/solutions/wireless-network" },
  { label: "Audio Video Intercom", href: "/solutions/av-intercom" },
  { label: "2-Way Radio Solutions", href: "/solutions/two-way-radio" },
  { label: "IP Phone", href: "/solutions/ip-phone" },
  { label: "IPTV / SMATV", href: "/solutions/iptv-smatv" },
  { label: "IT Equipment's", href: "/solutions/it-equipment" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Partners & Clients", href: "/partners-clients" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
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

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#f0f0f0] mb-5 uppercase tracking-[0.15em]">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#888] transition-all duration-300 hover:text-[#e5e5e5] hover:translate-x-1 inline-block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        }
      },
      { threshold: 0.05 }
    );

    const elements = footerRef.current?.querySelectorAll("[data-footer-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Company Info */}
          <div
            className="lg:col-span-2"
            data-footer-animate
            style={{ animationDelay: "0.1s" }}
          >
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <Image
                src="/images/logo.png"
                alt="ELV Technology Solutions"
                width={90}
                height={90}
                className="w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#888] mb-8 max-w-xs">
              ELV Technology Solutions one of the best ELV & Audio-Visual
              Integrators in Abu Dhabi.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#555] transition-colors group-hover:text-[#e5e5e5]" />
                <p className="text-sm text-[#888] transition-colors group-hover:text-[#e5e5e5]">
                  P.O. Box 36815 Grand Outlet Building, M01, Al Danah E18_02 Al
                  Falah St., Abu Dhabi, UAE
                </p>
              </a>
              <a
                href="mailto:info@etssmart.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#555] transition-colors group-hover:text-[#e5e5e5]" />
                <span className="text-sm text-[#888] transition-colors group-hover:text-[#e5e5e5]">
                  info@etssmart.com
                </span>
              </a>
              <a
                href="tel:+971547922800"
                className="flex items-center gap-3 group"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#555] transition-colors group-hover:text-[#e5e5e5]" />
                <span className="text-sm text-[#888] transition-colors group-hover:text-[#e5e5e5]">
                  +971 2441 8186
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#222] text-[#888] transition-all duration-300 hover:bg-[hsl(0,80%,38%)] hover:text-[#fff] hover:border-[hsl(0,80%,38%)] hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-footer-animate style={{ animationDelay: "0.2s" }}>
            <FooterLinkGroup title="Quick Links" links={quickLinks} />
          </div>

          {/* ELV Systems */}
          <div data-footer-animate style={{ animationDelay: "0.3s" }}>
            <FooterLinkGroup title="ELV Systems" links={elvSystems} />
          </div>

          {/* AV Solutions */}
          <div data-footer-animate style={{ animationDelay: "0.4s" }}>
            <FooterLinkGroup title="AV Solutions" links={avSolutions} />
          </div>

          {/* Network & Comms + Home Automation */}
          <div data-footer-animate style={{ animationDelay: "0.5s" }}>
            <FooterLinkGroup title="Network & Comms" links={networkComms} />

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[#f0f0f0] mb-4 uppercase tracking-[0.15em]">
                Home Automation
              </h3>
              <Link
                href="/solutions/home-automation"
                className="text-sm text-[#888] transition-all duration-300 hover:text-[#e5e5e5] hover:translate-x-1 inline-block"
              >
                Home Automation & Lighting Control System
              </Link>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div
          className="mt-16 rounded-2xl overflow-hidden border border-[#1a1a1a]"
          data-footer-animate
          style={{ animationDelay: "0.6s" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6768!2d54.3666!3d24.4869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI5JzEyLjgiTiA1NMKwMjInMDAuMCJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%"
            height="200"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ELV Technology Solutions Location"
          />
        </div>

        {/* Careers */}
        <div
          className="mt-12 rounded-2xl border border-[#1a1a1a] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:border-[#333]"
          data-footer-animate
          style={{ animationDelay: "0.7s" }}
        >
          <div>
            <h3 className="text-sm font-semibold text-[#f0f0f0] mb-2 uppercase tracking-[0.15em]">
              Careers
            </h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Interested in joining our team? Submit your CV to{" "}
              <a
                href="mailto:info@etssmart.com"
                className="text-[#e5e5e5] underline underline-offset-4 decoration-[#555] transition-colors hover:decoration-[#e5e5e5]"
              >
                info@etssmart.com
              </a>
              , and we{"'"}ll be in touch after reviewing your application.
            </p>
          </div>
          <a
            href="mailto:info@etssmart.com"
            className="shrink-0 flex items-center gap-2 rounded-full border border-[#333] px-5 py-2.5 text-sm font-medium text-[#e5e5e5] transition-all duration-300 hover:bg-[hsl(0,80%,38%)] hover:text-[#fff] hover:border-[hsl(0,80%,38%)]"
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#555]">
              ELV Technology Solutions - Sole Proprietorship LLC. All rights
              reserved.
            </p>
            <p className="text-xs text-[#555]">Abu Dhabi, UAE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
