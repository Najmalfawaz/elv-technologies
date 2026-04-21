import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Chatbot from "@/components/chatbot/chatbot";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
      <body className={`${playfair.className} bg-background text-foreground`}>
        {children}
        <Toaster richColors position="top-right" />
        <Chatbot />
      </body>
    </html>
  );
}
