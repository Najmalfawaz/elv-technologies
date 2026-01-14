import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Chatbot from "@/components/ui/chatbot"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "ELV Technology Solutions - Leading AV & ELV Company in Abu Dhabi, UAE",
  description:
    "ELV Technology Solutions is a leading ELV and Audio-Visual solutions integrator based in Abu Dhabi. We deliver complete ELV, AV, security, and smart integration services across the UAE.",
  icons: {
    icon: [
      { url: "/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo.png", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
