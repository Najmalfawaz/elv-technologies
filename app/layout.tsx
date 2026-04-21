import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Chatbot from "@/components/chatbot/chatbot";

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "ELV Technology Solutions",
  description: "Leading provider of integrated technology solutions in the UAE.",
  icons: {
    icon: "/images/1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} bg-background text-foreground`}>
        {children}
        <Toaster richColors position="top-right" />
        <Chatbot />
      </body>
    </html>
  );
}
