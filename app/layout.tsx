import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru Charan Teja | Python Developer | Full-Stack & AI/ML Engineer",
  description:
    "Portfolio of Paramesugalla Guru Charan Teja — Computer Science graduate specializing in Python, Django/Flask, AI/ML (NLP, RAG), and modern web systems.",
  keywords: [
    "Guru Charan Teja",
    "Python Developer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Django",
    "RAG",
    "Kadapa",
    "Portfolio",
  ],
  authors: [{ name: "Guru Charan Teja" }],
  creator: "Guru Charan Teja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gurucharanteja.dev",
    title: "Guru Charan Teja | Python Developer | Full-Stack & AI/ML Engineer",
    description:
      "Computer Science engineer with proven experience in building AI-powered platforms, RAG applications, and high-performance web systems.",
    siteName: "Guru Charan Teja Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans bg-[#110720] text-gray-100 antialiased selection:bg-purple-600 selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}