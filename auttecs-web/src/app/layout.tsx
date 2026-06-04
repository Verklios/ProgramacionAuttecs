import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTTECS – Automation & Technology Solutions | Industry 5.0",
  description:
    "We deliver end-to-end integrated engineering projects integrating advanced automation, renewable energy systems, and Industry 5.0 technologies. México & USA.",
  keywords: [
    "automation", "technology solutions", "industry 5.0", "mining", "HVAC",
    "IoT", "robotics", "energy solutions", "México", "USA",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
