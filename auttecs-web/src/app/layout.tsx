import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auttecs – Automatización e Inteligencia Artificial Empresarial",
  description:
    "Diseñamos e implementamos automatización, software e IA aplicada para que tu empresa opere con menos errores, más trazabilidad y decisiones más rápidas.",
  keywords: ["automatización", "inteligencia artificial", "IA empresarial", "software", "integración"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
